'use strict';
module.exports = function(gulp, config) {
	gulp.task('fonts', function() {
		gulp.src([config.fonts.app + '/**/*'])
		.pipe(gulp.dest(config.targetDir + '/' + config.fonts.app));
	});
};