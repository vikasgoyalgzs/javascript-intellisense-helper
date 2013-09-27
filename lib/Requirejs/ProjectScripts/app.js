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
 * Serialized dependecies for the intellisense service
 * @author Vikas Goyal
 */

var currentDependenciesJson = '';
if (currentDependenciesJson) {
    var intelliDeps = JSON.parse(currentDependenciesJson),
        intelliDepsObject = {},
        prp,
        prop,
        cf;

    for (prp in intelliDeps) {
        intelliDepsObject[prp] = JSON.parse(intelliDeps[prp], function (key, value) {
            if (key === "cf") {
                cf = function cf() { };
                for (prop in value) {
                    if (prop === "__super__") {
                        //merge all __super__ into 'value' recursively
                        cf.prototype = value.__super__;
                    } else {
                        if (prop === "intelliObject") {
                            cf.prototype = value.intelliObject;
                        } else {
                            cf[prop] = value;
                        }
                    }
                    
                }
                return cf;
            }

            if (key === "") {
                return value;
            }

            if (value === "f") {
                return function () { };
            }

            return value;

        });
        if (intelliDepsObject[prp] && intelliDepsObject[prp].cf) {
            intelliDepsObject[prp] = intelliDepsObject[prp].cf;
        }
    }
    window.deps = intelliDepsObject;
}

var globalDeps = '{"backbone":"Backbone","jquery":"jQuery","underscore":"_"}';
if (globalDeps) {
    window.globalDeps = JSON.parse(globalDeps);
}
