### Javascript Intellisense Helper
_Under Construction. Will be ready soon._

This module generates intellisense information for javascript applications in visual studio 2012 / Visual Studio Express for Web 2012. It currently supports two types of projects

1. Nodejs 
1. Requirejs - (This could be any project using requirejs. I have tested with backbone.js)

**Prerequisites:**

1. Microsoft Visual Studio 2012 or Visual Studio Express for Web 2012
1. Nodejs. Download from www.nodejs.org
1. Phantomjs. Download from http://phantomjs.org/ 

_Important: Make sure phantomjs and nodejs are added to your system path variable._

**How to start intellisense file watcher service.**

1. Configure the service first by opening the config.json file in notepad
   

      * path=The absolute root path of the project
      * jsPath= The relative path of the folder where all the javascript files live. 
      * indexFilePath= The relative path of the index file
      * startPageUrl= The url of the website 
      * intelliScriptsFolderPath= The relative path of the folder where intellisense scripts will live.
      * routePaths= The list of routes separated by semicolons
      * pageTimeout= The time your page takes to load. This is used by phantomjs.
      * projectType="RequireJs" or "Nodejs"

1. Browse to the root folder in command prompt.
1. Execute "npm install". This will install all the dependencies. 
1. Browse to the "lib" folder under root in command prompt.
1. Execute "node index.js". This will start the watcher service. Keep this running at all times.

**How to enable intellisense in VS**

1. Open Tools- Options in Visual Studio
1. Expand Text Editor - Javascript - Intellisense - References
1. In the text input box titled "Add a reference to the current group", enter 
1. ~/Scripts/_references.js

_Having issues in installation or intellisense not working?_

Follow along in the video on youtube. _Coming soon_

_or read details on this blog post_
http://vikasgoyalgzs.com/2013/07/18/javascript-intellisense-anyone/

**What is planned for the next release**
