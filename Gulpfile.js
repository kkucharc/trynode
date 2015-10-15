// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var transform = require('gulp-jstransform');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

var sass = require('gulp-sass');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('app/scripts/*.js')
    	.pipe(jshint())
    	.pipe(jshint.reporter('default'))

		.pipe(transform().on('error', gutil.log))
    	.pipe(gulp.dest('./public/'))
		
		.pipe(jshint())
    	.pipe(jshint.reporter('default'))
        
        .pipe(concat('all.js'))
        .pipe(gulp.dest('gulp'))
        .pipe(rename('all.min.js'))

        .pipe(jshint())
    	.pipe(jshint.reporter('default'));

});

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('gulp/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/scripts/*.js', ['scripts']);
    gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'watch'])