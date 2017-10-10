var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var fs = require('fs');

gulp.task('less', function () {
	fs.stat('./src/less/app.less', function(err, stat) {
		if(err != null) {
			console.log('Error:' + err.code);
		}
	});
	gulp.src('./src/less/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
	gulp.watch('./src/less/*.less', ['less']);
});
