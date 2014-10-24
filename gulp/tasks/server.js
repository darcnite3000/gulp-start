var gulp          = require('gulp'),
    connect       = require('connect'),
    serveStatic   = require('serve-static');

gulp.task('server', function() {
  var app = connect();
  app
    .use(serveStatic('./public'))
    .listen(8080);
});