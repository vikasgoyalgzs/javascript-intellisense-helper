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
 * Node native modules intellisense generator
 *
 * @author Vikas Goyal
 */
var http = require('http'),
    util = require('util'),
    fs = require('fs'),
	path = require('path'),
	args = process.argv,
	codeProcessor;

codeProcessor = {
    processMethods: function (methods, globals) {
        "use strict";
        if (!methods) {
            return {
                methodsCodeString: "",
                annotationString: ""
            };
        }
        var methodsString = "",
            annotationString = "",
            method, j,
            mLen, i, sLen,
            methodParams = "",
            commentFormat = "'%s':function() {\n/// <signature>\n///   <summary>%s</summary>\n%s/// </signature>\n},";

        for (j = 0, mLen = methods.length; j < mLen; j++) {
            method = methods[j];
            if (method.type === "method") {
                if (method.signatures) {
                    for (i = 0, sLen = method.signatures.length; i < sLen; i++) {
                        methodParams = this.processMethodParams(method.signatures[i].params);
                        methodsString += util.format(method.name + ":function(%s){},",
                                                     methodParams.paramString);
                        annotationString += util.format(commentFormat,
                                                      method.name,
                                                      method.desc.replace(/<\/?[a-z]+>/gi, "").replace(/\n+/g, ""),
                                                      methodParams.annotationString);
                    }

                } else {
                    methodsString += ":function(){},";
                }

            }
        }

        return {
            methodsCodeString: methodsString.replace(/,$/, ''),
            annotationString: annotationString.replace(/,$/, '')
        };
    },
    processMethodParams: function (params) {
        "use strict";
        if (!params) {
            return {
                paramString: "",
                annotationString: ""
            };
        }
        var paramString = "",
            annotationString = "",
            i, pLen,
            param,
            paramName,
            annotationFormat = '///   <param name="%s" type="object"></param>';
        for (i = 0, pLen = params.length; i < pLen; i++) {
            param = params[i];
            paramName = param.name;
            if (paramName === "...") {
                paramName = "value";
            }
            paramName = paramName.replace(/\s*\.\.\./, "").replace(/\)/g, "").replace(/\..+$/, "");
            if (paramString.indexOf(paramName) === -1) {
                paramString += paramName + ",";
                annotationString += util.format(annotationFormat, (param.optional ? ("[" + paramName + "]") : paramName)) + "\n";
            }

        }
        return {
            paramString: paramString.replace(/,$/, ''),
            annotationString: annotationString.replace(/,$/, '')
        };
    },
    processVars: function (vars) {
        "use strict";
        if (!vars) {
            return "";
        }
        var varsString = "",
            commentString = "",
            i,
            vLen,
            varValue;

        for (i = 0, vLen = vars.length; i < vLen; i++) {
            varValue = vars[i];
            if (varValue.name === "require") {
                continue;
            }
            varsString += "window." + varValue.name + "='';\n";
        }
        return varsString;
    },
    processClasses: function (classes) {
        "use strict";
        var codeString = "",
            objectFormat = "window.%s=function(){return {%s%s};};",
            commentsFormat = "intellisense.annotate(window.%s,{\n%s});",
            methodsCode,
            i, len,
            cls;

        for (i = 0, len = classes.length; i < len; i++) {
            cls = classes[i];
            methodsCode = this.processMethods(cls.methods);
            if (cls.modules) {
                codeString += this.processModules(cls.modules);
            }
            codeString += util.format(objectFormat + "\n" + commentsFormat + "\n",
                                            cls.name,
                                            this.processProperties(cls.properties),
                                            methodsCode.methodsCodeString,
                                            cls.name,
                                            methodsCode.annotationString);
        }
        return codeString;

    },
    processProperties: function (properties) {
        "use strict";
        if (!properties) {
            return "";
        }

        var codeString = "",
            i, len,
            prop;
        for (i = 0, len = properties.length; i < len; i++) {
            prop = properties[i];
            if (prop.name) {
                codeString += prop.name + ":'',";
            }
        }
        return codeString ? codeString : "";
    },
    processModules: function (modules) {
        "use strict";
        var codeString = "",
            methodsCode,
            module,
            i, len,
            objectFormat = "window.%s={%s%s};",
            commentsFormat = "intellisense.annotate(window.%s,{\n%s});";

        for (i = 0, len = modules.length; i < len; i++) {
            module = modules[i];
            if (module.methods) {
                methodsCode = this.processMethods(module.methods);
                codeString += util.format(objectFormat + "\n" + commentsFormat + "\n",
                                            module.name,
                                            this.processProperties(module.properties),
                                            methodsCode.methodsCodeString,
                                            module.name,
                                            methodsCode.annotationString);
                if (module.classes) {
                    codeString += this.processClasses(module.classes);
                }
            }
        }
        return codeString;
    }
};

// get node api json
http.get("http://nodejs.org/api/all.json", function (res) {
    "use strict";
    var data="";
    res.on('data', function (resData) {
        data = data + resData;
    });
    
    res.on('end', function () {
        var apiDoc = JSON.parse(data),
            codeString = codeProcessor.processVars(apiDoc.vars) +
                         codeProcessor.processModules(apiDoc.globals) +
                         codeProcessor.processModules(apiDoc.modules);

        codeString += "window.require = function (moduleName) {return window[moduleName];}\n";
        //Write code string to the intellisense file
        fs.writeFile(path.join(args[2], "Scripts", "node.intellisense.js"), codeString, function (err) {
            if (err) {
                throw err
            }
        });
    });

}).on('error', function (e) {
    "use strict";
    console.log("Error occured: " + e.message);
});