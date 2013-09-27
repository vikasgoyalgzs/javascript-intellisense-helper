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
 * Phantomjs url loader
 *
 * @author Vikas Goyal
 */

(function () {
    "use strict";
    //imports
    var fs = require('fs'),
        xmlToJs = require('../../XmlToJsConverter').XmlToJsConverter,
        page = require('webpage').create(),
        system = require('system'),

        //arguments
        args,
        globalDeps,
        intelliScriptFolderPath,
        pageTimeout,
        startUrl,
        routeUrls,
        scriptFolderUrl,
        modulePath,

        //locals
        fullDepsCode,
        currentDependencies,
        depsArray,
        intellisenseFileContents,
        intellisenseFilePath,
        processor;

    processor = {
        //initialize the module
        init: function () {
            var requireJsFileContents,
                requireJsFilePath;

            this.parseArguments(xmlToJs(system.args[1]));

            //get intellisenseFilePath and requireJsPath
            intelliScriptFolderPath = intelliScriptFolderPath.replace(/\/$/, '');
            intellisenseFilePath = intelliScriptFolderPath + "\\app.js";
            requireJsFilePath = intelliScriptFolderPath + "\\require.js";

            //remove trailing slashes from urls
            startUrl = startUrl.replace(/\/$/, '');
            scriptFolderUrl = scriptFolderUrl.replace(/\/$/, '');

            //read intellesense file
            intellisenseFileContents = fs.read(intellisenseFilePath).toString();

            //convert route urls to array
            if (routeUrls) {
                routeUrls = routeUrls.split(";");
            }

            if (modulePath) {
                //if modulePath is set, update requirejs file with modulePath
                requireJsFileContents = fs.read(requireJsFilePath).toString();
                var parts = /window.intelliModules = (\[.*?\]);/i.exec(requireJsFileContents);
                if (parts.length === 2) {
                    var intelliDeps = eval(parts[1]);
                    if (intelliDeps.indexOf(modulePath) === -1) {
                        intelliDeps.push(modulePath);
                        var intelliDepsString = "[";
                        for (var i = 0; i < intelliDeps.length; i++) {
                            intelliDepsString += "'" + intelliDeps[i] + "',";
                        }
                        intelliDepsString = intelliDepsString.replace(/,$/, '') + "]";
                        requireJsFileContents = requireJsFileContents.replace(/window.intelliModules = \[.*?\];/i, "window.intelliModules = " + intelliDepsString + ";");
                        fs.write(requireJsFilePath, requireJsFileContents);
                    }
                }
            }
        },

        parseArguments: function (args) {
            intelliScriptFolderPath = args.intelliScriptFolderPath.replace(/\//g, "\\"),
            pageTimeout = parseInt(args.pageTimeout),
            startUrl = args.startUrl,
            routeUrls = args.routeUrls,
            scriptFolderUrl = args.scriptFolderUrl,
            modulePath = args.modulePath,
            globalDeps = args.globalDeps
        },

        //Once the page is really loaded (all deps are resolved), start processing
        pageReallyLoadedCallback: function (status) {
            if (status === "success") {
                setTimeout(function () {
                    var requireContext,
                        nextUrl;

                    //get requireContext 
                    requireContext = page.evaluate(function () {
                        return window.requireContext;
                    });

                    //process 'defines' from requireContext
                    if (requireContext && requireContext.intelliDefines) {
                        processor.processDefines(requireContext.intelliDefines);
                    }

                    //if routeUrls are provided navigate to each url and repeat
                    if (routeUrls && routeUrls.length > 0) {
                        nextUrl = startUrl + "/" + routeUrls.shift();
                        console.log(nextUrl);
                        page.open(nextUrl, processor.pageReallyLoadedCallback);
                    } else {
                        //get out
                        if (modulePath) {
                            console.log("Intellisense updated for module " + modulePath);
                        } else {
                            console.log("Intellisense updated");
                        }
                        phantom.exit();
                    }
                }, pageTimeout);
            } else {
                console.log("Error while loading page: " + status);
                phantom.exit();
            }
        },

        //this functions takes defines, serializes them and writes them back to intellisense file
        processDefines: function (defines) {
            var serializedObject;

            if (defines) {
                serializedObject = JSON.stringify(defines, function (key, value) {
                    if (value && typeof value === 'string') {
                        return value.replace(/\"/g, '\\"');
                    }
                    return value;
                });
                intellisenseFileContents = intellisenseFileContents.replace(/var currentDependenciesJson = '.*?';/i, "var currentDependenciesJson = '" + serializedObject + "';");
                intellisenseFileContents = intellisenseFileContents.replace(/var globalDeps = '.*?';/i, "var globalDeps = '" + JSON.stringify(globalDeps) + "';");

                fs.write(intellisenseFilePath, intellisenseFileContents);
            }
        }
    };

    //call init
    processor.init();

    //change requirejs url
    page.onResourceRequested = function (requestData, networkRequest) {
        if (/require.+?\.js/.test(requestData.url)) {
            networkRequest.changeUrl(scriptFolderUrl + "/require.js");
        }
    }

    page.onConsoleMessage = function (msg) {
        console.log(msg);
    }
    //open first page
    page.open(startUrl, processor.pageReallyLoadedCallback);

}());