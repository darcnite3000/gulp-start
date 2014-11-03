'use strict';
var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),
    browserify      = require('browserify'),
    watchify        = require('watchify'),
    coffeeify       = require('coffeeify'),
    browserifyShim  = require('browserify-shim'),
    uglify          = require('gulp-uglify'),
    gulpif          = require('gulp-if'),
    ngAnnotate      = require('gulp-ng-annotate'),
    sourcemaps      = require('gulp-sourcemaps'),
    config          = require('../config.json').scripts;

module.exports = gulp.task('watchify',['browserify'], function() {
  var bundler = watchify(browserify({
    entries: [config.entry],
    extensions: ['.coffee'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));
  bundler
    .transform(coffeeify)
    .transform(browserifyShim);

  var bundle = function() {
    var name = config.minify ? config.name + '.' + 'min.js': config.name + 'js';
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil,'Browserify Error'))
      .pipe(source(name))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(gulpif(config.angular, ngAnnotate()))
      .pipe(gulpif(config.minify, uglify()))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.build));
  };

  bundler.on('update', bundle);
  return bundle();
});