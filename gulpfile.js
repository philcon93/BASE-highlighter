var path = require('path');
var fs = require('fs');
var { task, src, dest, watch, series} = require('gulp');
var less = require('gulp-less');

var config = {};
config.src = './src';
config.dist = './dist';
config.buildTasks = ['less', 'js'];

// Compiles LESS to CSS and moves it into /dist
task('less', function () {
	fs.stat(config.src + '/app.less', function(err, stat) { if(err != null) { console.log('Error:' + err.code);} });
	return src(config.src + '/app.less')
		.pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ] }))
		.pipe(dest(config.dist));
});

// Move the javascript files into /dist
task('js', function() {
	return src([config.src + '/rainbow/rainbow.min.js', config.src + '/base.js'])
		.pipe(dest(config.dist))
});

// Watches less files
task('watch', series('less'), function(done) {
	watch(config.src + '/*.less', series('less'));
	done();
});

task('build', series(config.buildTasks));

task('default', series('watch'));
