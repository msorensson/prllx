'use strict';
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('javascript:hint', function() {
    return gulp.src([
        './**/*.js',
        '!./gulp/tasks/**/*',
        '!./node_modules/**/*',
        '!./.jshintrc'
    ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('javascript:hint:watch', function() {
    gulp.watch([
        '**/*.js',
        '!gulp/tasks/**/*',
        '!node_modules/**/*',
        '.jshintrc'
    ], ['javascript:hint']);
});
