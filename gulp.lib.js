import gulp from 'gulp'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import cleanCss from 'gulp-clean-css'
import minifyhtml from 'gulp-minify-html'
import babel from 'gulp-babel'
import webpack from 'gulp-webpack';
import webpackConfig from './webpack.config.js';
import server from 'gulp-express';

export default {
    gulp,
    uglify,
    concat,
    cleanCss,
    minifyhtml,
    babel,
    webpack,
    webpackConfig,
    server
}