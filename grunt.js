/*global module:false*/
module.exports = function(grunt) {
    var files = {
      corelibs: {
        Underscore: {active: true, path: 'libs/underscore.js'},
        Backbone: {active: false, path: 'libs/backbone.js'},
        Handlebars: {active: true, path: 'libs/handlebars.js'},
        Prettyprint: {active: true, path: 'libs/google-code-prettify/prettify.js'}
      },

      custom: [
        'js/script.js'
      ],

      dict: function(){
        var ret = [];
        for(var lib in this.corelibs){
          if(this.corelibs.hasOwnProperty(lib)){
            if(this.corelibs[lib].active){
              ret.push(this.corelibs[lib].path);
            }
          }
        }
        ret.concat(this.custom);
        return ret;
      }
  };
  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! DB Toolbox Rebrand - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://www.digitalbungalow.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Ryan Struhl; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>'].concat(files.dict()),
        dest: 'dist/FILE_NAME.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/FILE_NAME.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};
