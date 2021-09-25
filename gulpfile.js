import gulp from 'gulp'
import uglify from 'gulp-uglify'
import exit from 'gulp-exit'
// import babel from 'gulp-babel'

﻿gulp.task('hello', async()=> {
    await console.log('작업1수행')
});

﻿gulp.watch(['src/**/*.js']).on('change', (path, stats)=>{
  console.log(`File ${path} was changed`);
});

// console.log('start')
gulp.task('default', async() =>{
    console.log('@ src 경로 아래 js를 압축해 dist 폴더아래 저장합니다')

    await gulp.src('src/**/*.js')
        .pipe(uglify())
        // .pipe(babel())
        .pipe(gulp.dest('dist'))
        .pipe(exit())
 
    console.log('@ [작업완료 - 종료]')
});
