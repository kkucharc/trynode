// imports
var mergeTrees = require('broccoli-merge-trees');
var concat = require('broccoli-concat');
var compileSass = require('broccoli-sass');
var compileES6 = require('broccoli-jstransform');
var pickFiles = require('broccoli-static-compiler');

// trees

// grab my styles in sass module
var styles = compileSass(['app/scss/'], 'style.scss', '/assets/styles.css');  

// grab my scripts
var scripts = concat('app/', {  
  inputFiles: ['scripts/*.js'],
  outputFile: '/assets/scripts.js'
});

// grap any static assets
var public = pickFiles('app/html', {  
  srcDir: '.',
  destDir: '.'
});


// merge all trees:
module.exports = mergeTrees([scripts, styles, public]);  