'use strict';
var gulp          = require('gulp'),
    connect       = require('connect'),
    serveStatic   = require('serve-static');

module.exports = gulp.task('server', function() {
  var app = connect();
  app
    .use(serveStatic('./public'))
    .listen(8080);
});