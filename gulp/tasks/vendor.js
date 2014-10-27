var gulp = require('gulp'),
    config = require('../config.json').vendor;

gulp.task('vendor', function() {
  for (var folder in config.folders) {
    if (config.folders.hasOwnProperty(folder)) {
      gulp.src(config.folders[folder]+"/**/*.*")
        .pipe(gulp.dest(config.build+"/"+folder));
    }
  }
});