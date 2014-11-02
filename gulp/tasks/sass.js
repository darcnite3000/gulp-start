var gulp          = require('gulp'),
    sourcemaps    = require('gulp-sourcemaps'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    config        = require('../config.json').styles;

gulp.task('sass', function() {
  return gulp
    .src(config.files)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./',{
      includeContent:false,
      sourceRoot: config.sourceRoot
    }))
    .pipe(gulp.dest(config.build));
});