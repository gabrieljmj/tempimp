const gulp = require('gulp'),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  fs = require('fs');

/**
 * Creates a copy of tempimp ES6 version for dist
 */
gulp.task('es6', () => {
  fs.createReadStream('./src/tempimp.js')
    .pipe(fs.createWriteStream('./dist/tempimp.es6.js'));
});

/**
 * Creates a ES5 version
 */
gulp.task('build',  () => {
  gulp.src('./src/tempimp.js')
    .pipe(gulp.dest('./dist'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['es6', 'build']);