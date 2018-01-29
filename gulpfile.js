'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    del = require('del');

gulp.task('concatScripts', function() {
    return gulp
        .src([
            'js/rounded-bar.js',
            'js/traffic-data.js',
            'js/canvas-selectors.js',
            'js/users.js',
            'js/toggle-charts.js',
            'js/close-modal.js',
            'js/message-user.js',
            'js/notifications.js',
            'js/settings-config.js'
        ])
        .pipe(maps.init())
        .pipe(concat('dashboard.js'))
        .pipe(maps.write('js'))
        .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
    return gulp
        .src('js/dashboard.js')
        .pipe(uglify())
        .pipe(rename('dashboard.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
    return gulp
        .src('styles/scss/styles.scss')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('styles/css'))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('clean', function() {
    del(['dist', 'styles/css/styles.css*', 'js/dashboard.*.js*']);
});

// Create production ready folder for web hosting

gulp.task('build', ['minifyScripts', 'compileSass'], function() {
    return gulp.src(['styles/css/**', 'js/dashboard.min.js', 'index.html', 'img/**', 'icons/**'], { base: './'})
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(['styles/scss/**/*.scss', 'js/*.js'], ['build']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
