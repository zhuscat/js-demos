var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './',
      directory: true,
    }
  });

  gulp.watch('*/*.html').on('change', browserSync.reload);
  gulp.watch('*/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
