module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jstransform: {
      files: {
        'dest/scripts/*.js': ['app/scripts/*.js']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-jstransform');

  // Default task(s).
  grunt.registerTask('default', ['jstransform']);
};