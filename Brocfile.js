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
		outputFile: '/assets/style.scss'
	});

// grab my scripts
var scripts = compileES6('app/scripts');

// grap any static assets
var public = pickFiles('app/html', {  
  srcDir: '.',
  destDir: '.'
});


// merge all trees:
var encoded = compileES6('app/scripts');
console.log(encoded);
module.exports = mergeTrees([scripts, styles, public]);  