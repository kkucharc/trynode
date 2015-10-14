'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jstransform: {
      classVisitors: {
        options: {
          visitors: ['class', 'arrow-function', 'object-short-notation']
        },
        files: {
          'dest/scripts/client.js':['app/scripts/client.js'],
          'dest/scripts/domains.js':['app/scripts/domains.js']
        }
      }
    },
    concat: {
      dist: {
        // the files to concatenate
        src: ['src/**/style.scss'],
        // the location of the resulting CSS file
        dest: 'dest/scss/output.scss'
      }
    },
    jshint: {
      files: ['app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        },
        // to ise ES6
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      // files: ['<%= jstransform.classVisitors.files %>'],
      scripts: {
        files: ['app/scripts/*.js'],
        tasks: ['jstransform']
      }
      // ,
      // scriptsJSHint: {
      //    files: ['app/scripts/*.js', 'dest/scripts/*.js'],
      //    tasks: ['jshint']
      // }
    }
  });

  grunt.loadNpmTasks('grunt-jstransform');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the plugin that provides the "uglify" task.

  grunt.registerTask('jstransform', function(){
    grunt.task.run('jshint');
  });
  // Default task(s).
  grunt.registerTask('default', ['jstransform', 'concat', 'jshint']);
};