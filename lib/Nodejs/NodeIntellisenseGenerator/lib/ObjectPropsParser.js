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
 * Object properties parser
 *
 * @author Vikas Goyal
 */
function getObjectProps(obj, objName) {
    "use strict";
    var codeString = "",
        prop,
        codeFormat,
        propVal,
        funcObj,
        params,
        parmsList,
        paramsArray,
        propType;

    if (typeof obj === "object") {
        codeFormat = "window.%s={%s};\n";
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                propVal = obj[prop];
                propType = typeof propVal;
                switch (propType) {
                    case "function":
                        codeString += prop + ":function(){},";
                        break;
                    case "object":
                        if (propVal.splice) {
                            codeString += prop + ":[],";
                        } else {
                            codeString += prop + ":{},";
                        }
                        break;
                    case "string":
                        codeString += prop + ":'',";
                        break;
                    case "number":
                        codeString += prop + ":0,";
                        break;
                    case "boolean":
                        codeString += prop + ":false,";
                        break;
                    default:
                        codeString += prop + ":'',";
                        break;
                }
            }
        }
        codeString = util.format(codeFormat, objName, codeString.replace(/,$/, ""));
    }
    if (typeof obj === "function") {
        funcObj = obj.toString().replace(/\n/g, " ");
        params = /function\s*?[A-Za-z0-9_]*?\(([\s\S]*?)\)/.exec(funcObj);

        if (params && params.length > 1) {
            parmsList = params[1];
            if (parmsList) {
                paramsArray = parmsList.split(",");
            }
        }
        codeFormat = "window.%s=function(){};";
        codeString = util.format(codeFormat, objName);
        codeFormat = "\nintellisense.annotate(window,{'%s':function() {\n/// <signature>\n///   <summary></summary>\n%s/// </signature>\n}});\n";
        codeString += util.format(codeFormat, objName, processMethodParams(paramsArray));
    }
    return codeString;
}

function processMethodParams(params) {
    "use strict";

    if (!params) {
        return "";
    }
    var codeString = "",
        param,
        i, len,
        codeFormat = '///   <param name="%s" type="object"></param>\n';

    for (i = 0, len = params.length; i < len; i++) {
        param = params[i];
        codeString += util.format(codeFormat, param.replace(/\s+/g, ""));
    }
    return codeString;
}

