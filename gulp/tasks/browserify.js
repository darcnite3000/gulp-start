var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),
    browserify      = require('browserify'),
    coffeeify       = require('coffeeify'),
    browserifyShim  = require('browserify-shim'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),
    config          = require('../config.json').scripts;

gulp.task('browserify', function() {
  var bundler = browserify({
    entries: [config.entry],
    extensions: ['.coffee'],
    debug: true
  });
  bundler
    .transform(coffeeify)
    .transform(browserifyShim);

  var bundle = function() {
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil,'Browserify Error'))
      .pipe(source(config.name + '.' + 'min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.build));
  };

  return bundle();
});