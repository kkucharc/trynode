// imports
var mergeTrees = require('broccoli-merge-trees'),
  concat = require('broccoli-concat'),
  compileSass = require('broccoli-sass'),
  compileES6 = require('broccoli-jstransform'),
  pickFiles = require('broccoli-static-compiler'),
  jshint = require('broccoli-jshint'),
  styles = 'app/scss',
  scripts = 'app/scripts',
  public = 'app/html',
  lint;

// trees

// grab my styles in sass module
// var styles = compileSass(['app/scss/'], 'style.scss', '/assets/styles.css');  
styles = compileSass(
	 [styles], 'style.scss', '/css/style.css'
);

//jshint(scripts);
// grab my scripts
lint = jshint(scripts);

scripts = compileES6(scripts, {transforms: [
  'es6-arrow-function',
  'es6-class',
  'es6-destructuring',  
  'es6-object-concise-method',
  'es6-object-short-notation',
  'es6-rest-param', 
  'es6-template',
  'es7-spread-property']
});

lint = jshint(scripts);

scripts = concat(scripts, {
  inputFiles : ['**/*.js'],
  outputFile: '/app.js'
});

//scripts = jshint(scripts);

// grap any static assets
var public = pickFiles(public, {  
  srcDir: '.',
  destDir: '.'
});


// merge all trees:
module.exports = mergeTrees([scripts, styles, public, lint]);  