import gulp from 'gulp'
import uglify from 'gulp-uglify'
// import babel from 'gulp-babel'

console.log('start')
gulp.task('default', () =>
    gulp.src('src/**/*.js')
        .pipe(uglify())
        // .pipe(babel())
        .pipe(gulp.dest('dist'))
);
