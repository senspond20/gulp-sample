import gulp from 'gulp'
// import babel from 'gulp-babel'

console.log('start')
gulp.task('default', () =>
    gulp.src('src/**/*.js')
        // .pipe(babel())
        .pipe(gulp.dest('dist'))
);
