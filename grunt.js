/*global module:false*/
module.exports = function(grunt) {
  var config = grunt.file.readJSON('config.json');

  var libs = function() {
      var ret = [];
      for (var lib in config.corelibs) {
        if (config.corelibs.hasOwnProperty(lib)) {
          if (config.corelibs[lib].active) {
            ret.push(config.corelibs[lib].path);
          }
        }
      }
      return ret;
    };
  // Project configuration.
  grunt.initConfig({
    opt: config,
    meta: {
      version: '0.1.0',
      banner: '/*! <%= opt.project_name %> - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://www.digitalbungalow.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Ryan Struhl; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>'].concat(libs()),
        dest: 'dist/libs.js'
      },
      custom: {
        src: ['<banner:meta.banner>'].concat(config.custom),
        dest: 'dist/<%= opt.project_name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/libs.min.js'
      },
      custom: {
        src: ['<banner:meta.banner>', '<config:concat.custom.dest>'],
        dest: 'dist/<%= opt.project_name %>.min.js'
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
