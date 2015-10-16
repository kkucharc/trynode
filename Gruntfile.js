'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jstransform: {
      classVisitors: {
        options: {
          visitors: ['class', 'arrow-function', 'object-short-notation']
        },
        files: {
          'grunt/scripts/client.js':['app/scripts/client.js'],
          'grunt/scripts/domains.js':['app/scripts/domains.js']
        }
      }
    },
    sass: {
        dist: {
            files: {
                'grunt/css/style.css': 'app/scss/style.scss'
            }
        }
    },
    concat: {
      dist: {
        // the files to concatenate
        src: ['grunt/scripts/*.js'],
        // the location of the resulting CSS file
        dest: 'grunt/app.js'
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
    }
  });

  grunt.loadNpmTasks('grunt-jstransform');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  // Load the plugin that provides the "uglify" task.

  grunt.registerTask('transform', function(){
    grunt.task.run('jstransform');
    grunt.task.run('jshint');
    grunt.task.run('concat');

  });
  // Default task(s).
  grunt.registerTask('default', ['transform', 'sass', 'watch']);
};