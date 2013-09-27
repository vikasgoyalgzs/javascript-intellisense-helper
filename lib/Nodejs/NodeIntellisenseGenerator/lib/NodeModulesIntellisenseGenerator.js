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
 */

/**
 * Node custom modules intellisense generator
 *
 * @author Vikas Goyal
 */
var util = require('util'),
    fs = require('fs'),
    child_process = require('child_process'),
    path = require('path'),
    args = process.argv,
    projectDir = args[2],
    tempFilePath = path.join(projectDir, "tempSrc.js");

//run npm install on projetDir
child_process.exec('echo %APPDATA%', function (error, stdout, stderr) {  //Get appdata
    var appData = stdout.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // Trim the return with replaces
    var env = process.env;
    env.APPDATA = appData;

    var cp_npm = child_process.exec("npm install", { cwd: projectDir, env: env }, function (error, stdout, stderr) {
        console.log("STDOUT: " + stdout);
        console.log("STDERR:" + stderr);
        if (stdout && stdout.length > 0) {
            //Once npm install is finished and if something was downloaded, rebuild intellisense
            fs.readdir(path.join(projectDir, "node_modules"), function (err, directories) {
                "use strict";
                var source,
                    i,
                    dirLen,
                    varName,
                    directoryName;

                if (directories) {
                    //Create code for the temporary code file
                    source = "var util = require('util');\n";
                    source += 'var codeString = "";\n';
                    source += fs.readFileSync(path.join(__dirname, "ObjectPropsParser.js"), "utf8");
                    for (i = 0, dirLen = directories.length; i < dirLen; i++) {
                        directoryName = directories[i];
                        varName = directoryName.replace(/-/g, "_");       //replace dash with underscore in directory name
                        if (!(/^\./.test(directoryName))) {               //ignore directories starting with dot
                            source += "try {\n";
                            source += util.format("var %s = require('%s');\n", varName, directoryName);
                            source += 'codeString += getObjectProps(' + varName + ', "' + varName + '")\n';
                            source += '} catch (e) {}\n';
                        }
                    }

                    //Send codeString to the parent process
                    source += "process.send(codeString);";
                    source += "process.exit(0);";

                    //Write code to the temp file
                    fs.writeFile(tempFilePath, source, function (err) {
                        //run temp file code in a child process
                        var cp = child_process.fork(tempFilePath, [], { cwd: projectDir });
                        //recieve message from the child process
                        cp.on('message', function (codeString) {
                            codeString += 'window.require = function (moduleName) { return window[moduleName]; }';
                            //write to nodeModules intellisense file
                            fs.writeFile(path.join(projectDir, "Scripts", "nodeModules.intellisense.js"), codeString, function () {
                                console.log("Intellisense code for modules generated successfully!");
                                fs.unlink(tempFilePath);
                            });
                        });
                    });
                }
            });
        }
        
    });
});
