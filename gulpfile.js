import gulp from 'gulp'
import uglify from 'gulp-uglify'
import exit from 'gulp-exit'
import babel from 'gulp-babel'
// import gjc from 'gulp-jsx-coverage'

﻿gulp.task('hello', async()=> {
    await console.log('작업1수행')
    await console.log('작업2수행')
    await console.log('작업3수행')
});


gulp.task('js-watch', () =>{
    const path = 'src/**/*.js';
    gulp.watch([path]).on('add', (path, stats)=>{
      console.log(`File ${path} add`);
   });
   gulp.watch([path]).on('change', (path, stats)=>{
      console.log(`File ${path} was changed`);
   });
});

// console.log('start')
gulp.task('default', async () =>{
    console.log('@ src 경로 아래 js를 압축해 dist 폴더아래 저장합니다')

    await gulp.src(['src/**/*.js','src/**/*.jsx'])
        .pipe(uglify())
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(exit())
 
    console.log('@ [작업완료 - 종료]')
});
