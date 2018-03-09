var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/'));
});


//Watch task
gulp.task('watch',function() {
    gulp.watch('src/**/*.scss',['styles']);
});



gulp.task('default', ['styles', 'watch']);

