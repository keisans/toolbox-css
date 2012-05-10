# Using Toolbox with Grunt.js

Grunt.js is a javascript build tool developed by ...

## Installing

* First you need to have node.js installed. If you don't, it can be picked up [here](http://www.google.com)
* Install Grunt by opening the terminal or cmd and entering `npm install -g grunt` (you may need to run as admin)
* Add the grunt-contrib module by running `npm install grunt-contrib`
* Change the settings in the config.json file to suit the project you're working on

## Running

To run grunt, open your command line of choice, navigate to the project folder that contains the grunt.js file (in this case the root folder) and then run `grunt`. Additionally you can run `grunt watch` to have a set of actions occur every time you save a file. (Note: The `grunt` utility does js minification, while `grunt watch` does not. It was too processor intensive, and slowed everything down, so I took it out)