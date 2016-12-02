var gulp = require('gulp'),
    resize = require('gulp-image-resize'),
    rename = require('gulp-rename');

gulp.task('resize', function(){
    gulp.src('img-src/*.jpg','')
        .pipe(resize({
            width: 300,
            height: 300,
            upscale: false
        }))
        .pipe(gulp.dest('img-dst/'))
});

gulp.task('rename', function(){
    gulp.src('img-src/*.jpg')
        .pipe(rename())
        .pipe(gulp.dest('js/app.min.js'));
});

gulp.task('default', ['resize', 'rename']);