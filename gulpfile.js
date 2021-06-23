'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const { prependListener } = require('gulp');

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
//-----------------Docs files----------------------------------
gulp.task('docs', function(){
    return gulp.src('app/dist/**/*.*')
    .pipe(gulp.dest('docs'))
});

gulp.task('default', gulp.series('sass', 'browser-sync', 'autoprefixer', 'docs', function(done){
    gulp.watch('app/src/scss/*.*', gulp.series('sass'));
    done()
}));