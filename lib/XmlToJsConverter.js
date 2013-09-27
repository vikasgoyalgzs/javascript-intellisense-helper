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
 * Converts XML to JS
 *
 * @author Vikas Goyal
 */
exports.XmlToJsConverter = XmlToJsConverter = (function () {

    function xmlToJs(xmlString, tagJsString) {
        var tagsArray,
            tagJs,
            tagName,
            tagBegin,
            tagEnd,
            tagBeginIndex,
            tagEndIndex,
            tagContent,
            newXmlString;

        tagsArray = /<(\w+)>/.exec(xmlString);
        tagJs = tagJsString || "";
        if (tagsArray) {
            tagName = tagsArray[1];
            tagBegin = tagsArray[0];
            tagEnd = tagBegin.replace("<", "</");
            tagBeginIndex = xmlString.indexOf(tagBegin);
            tagEndIndex = xmlString.lastIndexOf(tagEnd);
            tagContent = xmlString.substring(tagBeginIndex + tagBegin.length, tagEndIndex);

            if (/<\w+>/.test(tagContent)) {
                tagJs += '"' + tagName + '":{ ' + xmlToJs(tagContent) + '},';
            } else {
                if (tagContent.indexOf(":\\") > -1) {
                    tagContent = tagContent.replace(/\\/g, "\\\\");
                }
                tagJs += '"' + tagName + '":"' + tagContent + '",';
            }
            newXmlString = xmlString.substring(tagEndIndex + tagEnd.length);
            return xmlToJs(newXmlString, tagJs).replace(/,$/, "");
        } else {
            return tagJs.replace(/,$/, "");
        }
    }

    return function (xmlString) {
        return JSON.parse( "{" + xmlToJs(xmlString) + "}");
    };
}());

