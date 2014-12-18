'use strict';
var gulp        = require('gulp'),
    templates   = require('gulp-angular-templatecache'),
    minhtml     = require('gulp-minify-html'),
    config      = require('../config.json').scripts;

module.exports = gulp.task('templates', function() {
    if(config.angular){
      gulp.src(config.templates.src)
        .pipe(minhtml())
        .pipe(templates(config.templates.name+".js",{
          module: config.templates.name,
          standalone: true,
          moduleSystem: 'Browserify'
        }))
        .pipe(gulp.dest(config.templates.dest));
    }
});
