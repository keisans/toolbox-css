# Configuring your toolbox

The toolbox is not meant to build your entire application for you, but it should give you a solid foundation towards having your most basic styles. The configuration can be broken down into two separate areas, the config.json file and the vars.less file.

## Config.json

The config.json file is the configuration for the javascript, and it includes 4 separate pieces of data in the JSON format. 

* "project_name" : the name of the project. This will get appended to the top of a bunch of files at compile time, but otherwise has no major effects.
* "lint_js" : a boolean as to whether Grunt should lint the JavaScript files or not. Grunt uses JSHint, which may help your JS syntax, but most people just find it incredibly annoying, so here is where to turn it off
* "corelibs" : An object representing the 4 core js libraries to be included in the JavaScript concatenation: Underscore, Backbone, Handlebars, and Prettyprint. Each of those sub objects includes the path to the file (in case you want to ue custom paths) and a boolean representing whether or not these core libraries should be included
* "custom" : an array of strings representing paths to custom javascript. This can be added to as is necessary, and all of the files will be included.

## Vars.less

Vars.less is all of the default styles to be included in your project. This includes setting up all the colors, fonts, sizes and grids for the site. Most of the documentation for this should be in vars.less file which can be found in the less/toolbox folder. 