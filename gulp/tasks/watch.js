var gulp        = require('gulp'),
    livereload  = require('gulp-livereload'),
    config      = require('../config.json');

gulp.task('watch',['watchify','sass'], function() {
  livereload.listen();
  gulp.watch('public/**').on('change',livereload.changed);
  gulp.watch(config.scripts.files, ['sass']);
});