'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const { prependListener } = require('gulp');
const {src, task}= require('gulp');
const ghPages = require('gulp-gh-pages');

sass.compiler = require('node-sass');
// ---------------BrowserSync------------------------------
gulp.task('browser-sync', function(done){
    browserSync.init({
        server: {
            baseDir: './app/dist'
        },
        notify: false
    });
    browserSync.watch('app/dist/index.html').on('change', browserSync.reload);
    done()
});
//-----------------Autoprefixer----------------------------
gulp.task('autoprefixer', function(done){
    gulp.src('app/dist/css/main.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('app/dist/css'))
    done()
});
//-----------------Sass-compiler----------------------------
gulp.task('sass', function(){
    return gulp.src('app/src/scss/**/*.*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/dist/css'))
    .pipe(autoprefixer())
    .pipe(browserSync.reload({stream: true}));
});
//-----------------GitHub Pages----------------------------------
gulp.task('deploy', function(done){
    src('app/dist/**')
    .pipe(ghPages())
    done()
})

gulp.task('default', gulp.series('sass', 'browser-sync', 'autoprefixer', function(done){
    gulp.watch('app/src/scss/*.*', gulp.series('sass'));    
    done()
}));