const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

//ne pas oublier d'installer aussi : @babel/core

function css() {
    return src('./assets/scss/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest('./assets/css'), { sourcemaps: true })
        .pipe(browserSync.stream());
}

function js() {
    return src('./js/*.js', { sourcemaps: true })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('build.min.js'))
        .pipe(dest('./assets/js/min', { sourcemaps: true }));
}

function browser() {
    browserSync.init({
        proxy: 'localhost/css-layout',
        files: [
            './**/*.php'
        ]
    });

    watch('./assets/**/*.scss', css);
    //watch('./js/*.js', js).on('change', browserSync.reload);
    watch('./assets/**/*.js', js).on('change', browserSync.reload);
}

exports.css = css;
exports.js = js;
exports.default = browser;