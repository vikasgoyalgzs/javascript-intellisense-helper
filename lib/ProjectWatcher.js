/**
 * Copyright 2013 vikasgoyalgzs.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * Nodejs project file watcher
 *
 * @author Vikas Goyal
 */
exports.projectWatcher = projectWatcher =  (function () {
    "use strict";

    var chokidar = require('chokidar'),
        fs = require('fs.extra'),
        path = require('path'),
        util = require('util'),
        Log = require('log'),
        cp = require('child_process'),
        SimpleConvertXML = require('simpleconvert-xml'),
        LoggerOverrides = require('./LoggerOverrides').LoggerOverrides,
        processor;
        
    processor = {
        //Initialize the watcher process
        init: function () {
            var config = this.loadConfigs("../config.json"),
                consoleLogging = config.consoleLogging,
                projects = config.projects,
                logsFolder = path.resolve("../logs");

            if (!fs.existsSync(logsFolder)) {
                fs.mkdirSync(logsFolder);
                fs.mkdirSync(path.join(logsFolder, "old"));
            }

            this.log = this.startLogger(logsFolder, "ServiceLog.text");

            if (typeof consoleLogging === "undefined" || consoleLogging) {
                LoggerOverrides(this.log);
            }
            
            this.log.info('Starting intellisense Service...');
            this.processProjects(projects);
        },

        //Start logger
        /*Move existing log file to the old folder and create a new one*/
        startLogger: function (logFolderPath, logFileName) {
            var logFilePath = path.join(logFolderPath, logFileName);

            if (fs.existsSync(logFilePath)) {
                fs.move(logFilePath, path.join(logFolderPath, "old", "ServiceLog-" + new Date().getTime() + ".text"), function (err) {
                    if (err) {
                        console.log("Error occurred while trying to move log file to the 'old' folder. The current log will be overwritten");
                    }
                });
            }
            return new Log('debug', fs.createWriteStream(logFilePath));
        },

        //Load configurations from config.json file
        loadConfigs: function (configFilePath) {
            //read config file
            return JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
        },

        //Process projects loaded from configuration file
        processProjects: function (projects) {
            var project,
                i;

            //If projects found in config and it is an array
            if (projects && Object.prototype.toString.call(projects) === "[object Array]") {
                //Iterate over projects and attach watcher
                for (i = 0; i < projects.length; i++) {
                    project = projects[i];

                    switch (project.projectType) {
                        case "RequireJs":
                            this.startRequirejsProjectMonitor(project);
                            break;
                        case "Nodejs":
                            this.startNodejsProjectMonitor(project);
                            break;
                        default:
                            break;
                    }
                }

            }
        },

        //Start requirejs project monitor
        startRequirejsProjectMonitor: function (project) {
            var self = this,
                watcher,
                fileChangeCallback,
                walker,
                projectScriptsFolderPath = path.join(project.path, project.intelliScriptsFolderPath),
                baseScriptFolderPath = path.join(__dirname, "Requirejs", "ProjectScripts"),
                jsFolderPath = path.join(project.path, project.jsPath);

            if (!project.startPageUrl || !project.intelliScriptsFolderPath) {
                this.log.error("The StartPageUrl or intelliScriptsFolderPath is not specfied. This project will not be monitored.");
            }

            //Copy Scripts 
            walker = fs.walk(baseScriptFolderPath);

            // walk thru files
            walker.on("file", function (root, stat, next) {
                var sourceFilepath = path.join(root, stat.name),
                    destinationFilePath = path.join(projectScriptsFolderPath, stat.name);

                if (fs.existsSync(destinationFilePath)) {
                    fs.unlinkSync(destinationFilePath);
                }
                fs.copy(sourceFilepath, destinationFilePath, function (err) {
                    if (err) {
                        self.log.error("Error occured while trying to copy intelliScript file" + stat.name);
                    }
                });
            });


            //Run requirejs intellisense generator program for main.js
            this.runRequireIntellisenseProcess(project);

            // modulesWatcher watches for module changes 
            watcher = chokidar.watch(jsFolderPath, {
                ignored: /^\./,
                persistent: true,
                ignoreInitial: true
            });

            //create file change callback
            fileChangeCallback = this.createFileChangeProcessor(project, jsFolderPath);

            watcher.on("all", fileChangeCallback);

            watcher.close();

            this.log.info("Started monitoring requirejs project directory " + jsFolderPath);
        },

        //Start nodejs project monitor
        startNodejsProjectMonitor: function (project) {
            var nodeCodePath = path.join(__dirname, "Nodejs", "NodeIntellisenseGenerator", "lib"),
                projectPath = project.path.replace(/\\$/, '');

            if (!projectPath) {
                log.error("The project path is not specfied. This project will not be monitored.");
                return;
            }

            //Run nodejs intellisense generator program
            this.runNodeIntellisenseProcess(path.join(nodeCodePath, "NodeIntellisenseGenerator.js"), projectPath);

            //Run external modules intellisense
            this.runNodeIntellisenseProcess(path.join(nodeCodePath, "NodeModulesIntellisenseGenerator.js"), projectPath);

            // modulesWatcher watches the package.json for changes
            chokidar.watch(path.join(projectPath, "package.json"), { persistent: true });

            this.log.info("Started monitoring node project directory " + projectPath);

        },

        //Create file change callback 
        createFileChangeProcessor: function (project, jsFolderPath) {
            var self = this,
                changedFiles = [];
            return function (event, path, stats) {
                var moduleRelativePath = path.replace(jsFolderPath, "").replace(/\\/, "/");
                moduleRelativePath = moduleRelativePath.replace(/^\//, "").replace(".js", "");
                if (moduleRelativePath && moduleRelativePath !== "main" &&
                    moduleRelativePath !== "config") {
                    if (changedFiles.indexOf(moduleRelativePath) === -1) {
                        changedFiles.push(moduleRelativePath);
                        self.log.info("Processing change to module " + moduleRelativePath);
                        self.runRequireIntellisenseProcess(project, moduleRelativePath);
                        setTimeout(function () {
                            var indexOfModule = changedFiles.indexOf(moduleRelativePath);
                            if (indexOfModule > -1) {
                                changedFiles.splice(indexOfModule, 1);
                            }
                        }, 1000);
                    }
                }
            };
        },

        //Run node intellisense process
        runNodeIntellisenseProcess: function (modulePath, projectPath) {
            var cmd = util.format('node "%s" "%s"', modulePath, projectPath);
            this.executeChildProcess(cmd, path.join(__dirname, "Nodejs", "NodeIntellisenseGenerator", "lib"));
        },

        //Run requirejs intellisense process
        runRequireIntellisenseProcess: function (project, modulePath) {
            var cmd,
                serializedParams = "",
                prop,
                propValue,
                params,
                indexFilePath = path.join(project.path, project.indexFilePath);

            params = {
                intelliScriptFolderPath: path.join(project.path, project.intelliScriptsFolderPath),
                pageTimeout: project.pageTimeout.toString(),
                startUrl: project.startPageUrl,
                scriptFolderUrl: project.startPageUrl.replace(indexFilePath, "").replace(/\/$/, "") + "/" + project.intelliScriptsFolderPath,
                routeUrls: project.routePaths.toString(),
                modulePath: modulePath, 
                globalDeps: project.globalDeps
            };

            serializedParams = SimpleConvertXML.getObjAsXMLstr(params).replace(/<\?.+?\?>/, "").replace(/\n/g, "").replace(/\\/g, "/");
            //call phantom
            cmd = util.format('phantomjs --load-images=false %s "%s"', 'DependencyListGenerator.js', serializedParams);

            this.executeChildProcess(cmd, path.join(__dirname, "Requirejs", "lib"));
        },

        //Execute child process 
        executeChildProcess: function (cmd, cwd) {
            var self = this;

            cp.exec(cmd, { cwd: cwd }, function (err, stdout, stderr) {
                if (err || stderr) {
                    self.log.error(err);
                }
                if (stdout) {
                    self.log.info(stdout);
                }
            });
        }
    };

    return processor;

}());