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
 * Tester for project watcher
 *
 * @author Vikas Goyal
 */

var fs = require('fs');
var path = require('path');
var sinon = require('sinon');
var assert = require("assert");
var _ = require("underscore");
var projectWatcher = require("../lib/ProjectWatcher.js").projectWatcher;


describe('projectWatcher', function () {
    describe.skip('#startLogger', function () {
        var logsDirectioryPath = path.resolve("./logs");
        var oldDirectoryPath = path.join(logsDirectioryPath, "old");
        
        before(function () {
            fs.mkdirSync(logsDirectioryPath);
            fs.mkdirSync(oldDirectoryPath);
        });

        beforeEach(function () {
            projectWatcher.startLogger(logsDirectioryPath, "ServiceLog.text");
        });

        it('should create a new log file when no log is present', function () {
            (fs.existsSync(path.join(logsDirectioryPath, "ServiceLog.text"))).should.be.true;
        });
        it('should move the old log file to the "old" folder', function () {
            (fs.existsSync(path.join(oldDirectoryPath, "ServiceLog.text"))).should.be.true;
        });

        after(function () {
            fs.unlinkSync(oldDirectoryPath);
            fs.unlinkSync(logsDirectioryPath);
        });

    });

    describe("#loadConfigs", function () {
        var configFilePath = path.resolve("../config.json");
        var config;

        before(function () {
            config = projectWatcher.loadConfigs(configFilePath);
        });

        it("should return config object", function () {
            config.should.be.a("object");
        });

        it("should have projects array", function () {
            (Object.prototype.toString.call(config.projects)).should.equal("[object Array]");
        });
    });

    describe("#processProjects", function () {
        var requireJsProjects;
        var requireJsStub = sinon.stub(projectWatcher, "startRequirejsProjectMonitor");
        var nodejsStub = sinon.stub(projectWatcher, "startNodejsProjectMonitor");

        before(function () {
            var startLoggerStub = sinon.stub(projectWatcher, "startLogger", function () {
                return { info: function () { }, error: function () { } };
            });
            projectWatcher.log = startLoggerStub();

            var configFilePath = path.resolve("../config.json");
            var config = projectWatcher.loadConfigs(configFilePath);
            var projects = config.projects;
            projectWatcher.processProjects(projects);
            
        });

        it("should call startRequirejsProjectMonitor method once", function () {
            requireJsStub.should.have.been.calledOnce;
            projectWatcher.startRequirejsProjectMonitor.restore();
        });

        it("should call startNodejsProjectMonitor method once", function () {
            nodejsStub.should.have.been.calledOnce;
            projectWatcher.startNodejsProjectMonitor.restore();
        });
    });

    
    describe("#startRequirejsProjectMonitor", function () {
        var requireJsProjects;
        var requireJsStub = sinon.stub(projectWatcher, "runRequireIntellisenseProcess");

        before(function () {
            var configFilePath = path.resolve("../config.json");
            var config = projectWatcher.loadConfigs(configFilePath);
            var projects = config.projects;
            var requireJsProjects = _.where(projects, {projectType: "RequireJs"});
            projectWatcher.startRequirejsProjectMonitor(requireJsProjects[0]);

        });

        it("should call runRequireIntellisenseProcess method once", function () {
            requireJsStub.should.have.been.calledOnce;
            projectWatcher.runRequireIntellisenseProcess.restore();
        });

    });

    describe("#startNodejsProjectMonitor", function () {
        var nodeJsProjects;
        var nodeJsStub = sinon.stub(projectWatcher, "runNodeIntellisenseProcess");

        before(function () {
            var configFilePath = path.resolve("../config.json");
            var config = projectWatcher.loadConfigs(configFilePath);
            var projects = config.projects;
            var nodeJsProjects = _.where(projects, { projectType: "Nodejs" });
            projectWatcher.startNodejsProjectMonitor(nodeJsProjects[0]);

        });

        it("should call runNodeIntellisenseProcess method twice", function () {
            nodeJsStub.should.have.been.calledTwice;
            projectWatcher.runNodeIntellisenseProcess.restore();
        });

    });

    describe("#runRequireIntellisenseProcess", function () {
        var executeChildProcessStub;

        beforeEach(function () {
            var project = {
                path: "C:\\Test",
                jsPath: "js",
                indexFilePath: "index.html",
                startPageUrl: "http://localhost:8081",
                intelliScriptsFolderPath: "Scripts",
                routePaths: [],
                pageTimeout: 4000,
                projectType: "RequireJs",
                globalDeps: {
                    backbone: "Backbone",
                    jquery: "jQuery",
                    underscore: "_"
                }
            }
            executeChildProcessStub = sinon.stub(projectWatcher, "executeChildProcess");
            projectWatcher.runRequireIntellisenseProcess(project);

        });

        it("should call executeChildProcess method once with correct parameters", function () {
            executeChildProcessStub.should.have.been.calledWith('phantomjs --load-images=false DependencyListGenerator.js "<intelliScriptFolderPath>C:/Test/Scripts</intelliScriptFolderPath><pageTimeout>4000</pageTimeout><startUrl>http://localhost:8081</startUrl><scriptFolderUrl>http://localhost:8081/Scripts</scriptFolderUrl><routeUrls></routeUrls>undefined<globalDeps><backbone>Backbone</backbone><jquery>jQuery</jquery><underscore>_</underscore></globalDeps>"', 'C:\\Users\\vgoya2\\Dropbox\\Vikas_Documents\\Projects\\javascript-intellisense-helper\\IntellisenseHelper\\lib\\Requirejs\\lib');
            
        });

        afterEach(function () {
            projectWatcher.executeChildProcess.restore();
        });
        
    });

    describe("#runNodeIntellisenseProcess", function () {
        var executeChildProcessStub;

        beforeEach(function () {
            var codePath = path.join(__dirname, "..", "lib", "Nodejs", "NodeIntellisenseGenerator", "lib", "NodeIntellisenseGenerator.js");
            executeChildProcessStub = sinon.stub(projectWatcher, "executeChildProcess");
            projectWatcher.runNodeIntellisenseProcess(codePath, "C:\\");

        });

        it("should call executeChildProcess method once with correct parameters", function () {
            executeChildProcessStub.should.have.been.calledWith('node "C:\\Users\\vgoya2\\Dropbox\\Vikas_Documents\\Projects\\javascript-intellisense-helper\\IntellisenseHelper\\lib\\Nodejs\\NodeIntellisenseGenerator\\lib\\NodeIntellisenseGenerator.js" "C:\\"', path.join(__dirname, "..", "lib", "Nodejs", "NodeIntellisenseGenerator", "lib"));
        });

        afterEach(function () {
            projectWatcher.executeChildProcess.restore();
        });

    });
   
    
});