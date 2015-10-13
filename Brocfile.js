// imports
var mergeTrees = require('broccoli-merge-trees');
var concat = require('broccoli-concat');
// var compileSass = require('broccoli-sass');
var compileES6 = require('broccoli-jstransform');
var pickFiles = require('broccoli-static-compiler');

// trees

// grab my styles in sass module
// var styles = compileSass(['app/scss/'], 'style.scss', '/assets/styles.css');  
var styles = concat(
	'app/scss',{
		inputFiles: ['*.scss'],
		outputFile: '/brocoli/assets/style.scss'
	});

// grab my scripts
var scripts = compileES6('app/scripts', [    
	'es6-arrow-function',
  	'es6-class',
    'es6-destructuring',
    'es6-object-concise-method',
    'es6-object-short-notation',
    'es6-rest-param',
    'es6-template',
    'es7-spread-property',
    'reserved-words']);

// grap any static assets
var public = pickFiles('app/html', {  
  srcDir: '.',
  destDir: '.'
});


// merge all trees:
module.exports = mergeTrees([scripts, styles, public]);  