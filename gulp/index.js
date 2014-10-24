var gulp        = require('gulp'),
    requireDir  = require('require-dir'),
    tasks       = requireDir('./tasks');

gulp.task('default',['browserify','sass']);

module.exports = gulp;