var gulp = require('gulp'),
    resize = require('gulp-image-resize'),
    styles = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('resize', function(){
    gulp.src(['img-src/*.{jpg,png}', '!img-src/center-image.jpg'])
        .pipe(resize({
            width: 600,
            height: 600,
            upscale: false
        }))
        .pipe(rename(function (path) { path.basename += "-md-600"; }))
        .pipe(gulp.dest('img-dst/'));
});

gulp.task('styles', function(){
    gulp.src(['css-src/*.css','!css-src/*.min.css'])
        .pipe(styles())
        .pipe(rename(function (path) { path.basename += ".min"; }))
        .pipe(gulp.dest('css-src/'));
});

gulp.task('clean', function() {
    gulp.src('img-dst/', { read: false })
        .pipe(clean());
    gulp.src('css-src/*min.css', { read: false })
        .pipe(clean());
});

gulp.task('watch', function() {
    gulp.watch('img-src/*.{jpg,png}',['resize']);
    gulp.watch('css-src/*.css', ['styles']);
});

gulp.task('default', ['resize', 'styles', 'watch', 'clean']);