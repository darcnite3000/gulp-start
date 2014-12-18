'use strict';
var gulp        = require('gulp'),
    livereload  = require('gulp-livereload'),
    config      = require('../config.json');

module.exports = gulp.task('watch',['watchify','sass'], function() {
  livereload.listen();
  gulp.watch('public/**').on('change',livereload.changed);
  gulp.watch(config.styles.files, ['sass']);
  if(config.scripts.angular){
    gulp.watch(config.scripts.templates.src,['templates']);
  }
});