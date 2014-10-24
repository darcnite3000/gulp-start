var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    config = require('../config.json').styles;

gulp.task('sass', function() {
  return gulp
    .src(config.files)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.build));
});