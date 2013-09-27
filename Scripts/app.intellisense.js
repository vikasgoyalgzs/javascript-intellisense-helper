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
 * Override require and define functions for the intellisense service
 * @author Vikas Goyal
 */
window.require = window.define = function () {
    "use strict";

    var args = Array.prototype.slice.apply(arguments),
        //args
        thisArg,
        deps,
        callback,
        //locals
        i, j,
        depProp,
        prop,
        globalDepIndex,
        globalDep,
        newArgs = [],
        thisDep,
        found,
        allDeps = window.deps,
        globalDeps = window.globalDeps;


    //iterate over arguments and find the deps
    for (j = 0; j < args.length; j++) {
        thisArg = args[j];
        if (Object.prototype.toString.call(thisArg) === '[object Array]') {
            deps = thisArg;
            callback = args[j + 1];
            break;
        }
    }

    if (Object.prototype.toString.call(deps) === '[object Array]') { //if array
        for (i = 0; i < deps.length; i++) {
            thisDep = deps[i];

            //get the global dependency name for this dependency 
            if (globalDeps) {
                for (depProp in globalDeps) {
                    if (globalDeps.hasOwnProperty(depProp)) {
                        if (depProp.toLowerCase() === thisDep.toLowerCase()) {
                            globalDep = globalDeps[depProp];
                            break;
                        }
                    }
                }
            }


            //if global dep found and it is loaded in to the window object, 
            //push it to args, else look into the allDeps objects 
            if (globalDep && window[globalDep]) {
                newArgs.push(window[globalDep]);
                globalDep = undefined;
            } else {
                var found = false;
                for (prop in allDeps) {
                    if (allDeps.hasOwnProperty(prop)) {
                        if (thisDep === prop) {
                            newArgs.push(allDeps[prop]);
                            found = true;
                            break;
                        }
                    }

                }

                //if not found, push empty object
                if (!found) {
                    newArgs.push({});
                }
            }
        }
    }
    callback.apply(this, newArgs);
};