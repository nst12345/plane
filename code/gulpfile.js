/**
 * Created by Administrator on 2017/7/4 0004.
 */
var gulp=require("gulp")
var babel=require("gulp-babel")
var uglify=require("gulp-uglify")

gulp.task('jstask', function () {
    gulp.src('js/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'));
});


var minifyCss = require('gulp-minify-css');
gulp.task('cssTask', function(){
    gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dest/css'));
});

gulp.task("default",['jstask','cssTask'])