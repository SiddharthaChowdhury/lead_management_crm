'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('sass', function () {
    gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/styles/css/'))
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/*.scss', ['sass']);
});
