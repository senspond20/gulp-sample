import pkg from 'gulp'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import cleanCss from 'gulp-clean-css'
import minifyhtml from 'gulp-minify-html'
import exit from 'gulp-exit'
import babel from 'gulp-babel'
import del from 'del'

const {task, watch, src,dest,series} = pkg;

task('hello', async()=> {
    await console.log('작업1수행')
    await console.log('작업2수행')
    await console.log('작업3수행')
});


task('js-watch', () =>{
    const path = 'src/**/*.js';
    watch([path]).on('add', (path, stats)=>{
      console.log(`File ${path} add`);
   });
   watch([path]).on('change', (path, stats)=>{
      console.log(`File ${path} was changed`);
   });
});

task('start', async ()=>{
    console.log('@ 작업 시작합니다')
})
task('clean', async ()=>{
    console.log('@ dist 하위 경로 강제 삭제')
    await del(['dist/**/*'], {force :true});
})
task("create-css", async()=>{ 
   console.log('@ src 경로 아래 css 들을 하나로 병합하고 압축해 dist 폴더아래 저장합니다')
   await src(["src/**/*.css"])
    .pipe(concat("style.bundle.css")) // 모든 css들을 병합 
    .pipe(cleanCss({ compatibiliy: 'ie8' })) // ie8 까지 호환성 맞춤
    .pipe(dest("dist/css")) 
});

// console.log('start')
task('create-js', async () =>{
    console.log('@ src 경로 아래 js,jsx 를 ES5로 변환후 압축해 dist 폴더아래 저장합니다')
    await src(['src/**/*.js','src/**/*.jsx'])
        .pipe(babel())   // .babelrc 설정으로 들어간다 . 
        .pipe(uglify())  //  js 경량화
        .pipe(concat("js/main.bundle.js"))
        .pipe(dest('dist'))
});

task('create-html', async ()=>{
    await src('src/index.html')
        .pipe(minifyhtml())
        .pipe(dest('dist'))
})

task('end',async()=>{
    console.log('@ 작업 종료합니다')
})

// default -> celan -> create-css -> create-js
task('default', series(
    [
     'start',
     'clean',
     'create-css',
     'create-js',
     'create-html',
     'end'
    ]
));

