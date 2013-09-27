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
 * Parser for backbone documentation
 *
 * @author Vikas Goyal
 */
(function () {
    var $ = require('jQuery'),
        fs = require('fs'),
        util = require('util'),
        path = require('path'),
        parser,
            
        backboneAnnonationCode,
        modelAnnotationCode,
        functionFormat,
        paramsFormat;

    parser= {
        init: function () {
            backboneAnnonationCode = "intellisense.addEventListener('statementcompletion', function (event) {\n\tif (event.targetName === 'this') return\n\n\tvar intelliObjectType = event.target._intelliObjectType;\n\tswitch (intelliObjectType) {\n\tcase 10:\n\t\t%s\n\tbreak;\n\tcase 11:\n\t\t%s\n\tbreak;\n\tcase 12:\n\t\t%s;\n\t\n\tcase 13:\n\t\t%s\n\tbreak;\n\tdefault:\n\tbreak;\n\t}\n\t});";
            functionFormat = "'%s': function () {\n\t/// <signature>\n\t///\t<summary>%s</summary>\n\t%s///\t<returns type=\"\" />\n\t/// </signature>\n\t},\n";
            paramsFormat = '///\t<param name="%s" type="%s">%s</param>\n\t';

            var htmlSource = this.getHtmlSource();
            var intellisenseString = this.createBackboneIntellisenseString(htmlSource);
            fs.writeFile(path.resolve("../Requirejs/ProjectScripts/backbone.intellisense.js"), intellisenseString, {encoding: "utf8"});
        },

        createBackboneIntellisenseString: function (htmlSource) {
            return util.format(backboneAnnonationCode,
                    this.createIntellisenseString(htmlSource, "Model"),
                    this.createIntellisenseString(htmlSource, "Collection"),
                    this.createIntellisenseString(htmlSource, "View"),
                    this.createIntellisenseString(htmlSource, "Router"));
        },

        createIntellisenseString: function (htmlSource, type) {
            var paras,
                self = this;

            paras = $(htmlSource).find('p[id^="' + type + '"]');
            if (paras.length > 0) {
                var intelliFunctions = "";
                    
                $.each(paras, function () {
                    intelliFunctions += self.parseFunction(this);
                });
                return "intellisense.annotate(event.target, {\n\t" +  intelliFunctions.replace(/,\n$/, "") + "\n\t});";
             }
        },
        getHtmlSource: function () {
            return fs.readFileSync(path.resolve("./bb.txt"), "utf8");
        },
        parseFunctionParams: function (header, code) {
            var i,
                regexPattern,
                paramsParts,
                params,
                paramsCode = "",
                currentParam;

            regexPattern = new RegExp(header + "\\((.+?)\\)");
            paramsParts = regexPattern.exec(code);

            if (paramsParts && paramsParts.length > 1) {
                params = paramsParts[1].split(",");
                for (i = 0; i < params.length; i++) {
                    currentParam = params[i];
                    paramsCode += util.format(paramsFormat, currentParam, "Object", currentParam);
                }
            }
            return paramsCode.replace(/\n\t$/, "");
        },
        parseFunction: function (paraTag) {
            var $header,
                header,
                $code,
                code,
                desc,
                $this = $(paraTag);

            $header = $this.find("b.header");
            header = $header.html();
            $code = $this.find("code");
            code = $code.html();
            $header.remove();
            $code.remove();
            desc = $this.text();

            var descSplit = desc.split("\n");
            var newDesc = "";
            for (var i = 0; i < descSplit.length; i++) {
                var thisDessLine = descSplit[i].replace(/^\s+/, "");
                if (thisDessLine) {
                    newDesc += thisDessLine + " ";
                }
            }

            return util.format(functionFormat, header, newDesc.replace(/[\n\r]/g, ""), parser.parseFunctionParams(header, code));
        }

    }

    parser.init();


}());








