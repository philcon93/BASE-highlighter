var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var fs = require('fs');

var config = {};
config.src = './src';
config.dist = './dist';

// Compiles LESS to CSS and moves it into /dist
gulp.task('less', function () {
	fs.stat(config.src + '/less/app.less', function(err, stat) {
		if(err != null) { console.log('Error:' + err.code);}
	});
	gulp.src(config.src + '/less/app.less')
		.pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ] }))
		.pipe(gulp.dest(config.dist));
});

// Move the javascript files into /dist
gulp.task('js', function() {
	return gulp.src([config.src + '/rainbow/rainbow.min.js', config.src + '/base.js'])
		.pipe(gulp.dest(config.dist))
});

// Watches less files
gulp.task('watch', ['less'], function() {
	gulp.watch(config.src + '/less/*.less', ['less']);
});

gulp.task('default', ['watch']);
