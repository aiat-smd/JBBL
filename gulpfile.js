let browserSync = require("browser-sync");
let del = require("del");
let gulp = require("gulp");
let autoprefixer = require("gulp-autoprefixer");
let concat = require("gulp-concat");
let rename = require("gulp-rename");
let sass = require("gulp-sass");
let uglify = require("gulp-uglify");

gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('script', function () {
    return gulp.src('src/js/*.js')
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('js', function () {
    return gulp.src('src/js-libs/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('css', function () {
    return gulp.src('src/css-libs/*.scss,[.css]')
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('src/scss'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    })
});

gulp.task('images', function () {
    return gulp.src('src/images/**/*.*')
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('export', async function () {
    let buildHtml = gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
    let buildCss = gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('dist/css'))
    let buildJs = gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
    let buildFonts = gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
    let buildImages = gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', function () {
    gulp.watch('src/css-libs/*.css', gulp.parallel('css'))
    gulp.watch('src/scss/**/.scss', gulp.parallel('scss'))
    gulp.watch('src/*.html', gulp.parallel('html'))
    gulp.watch('src/images/**/*.*', gulp.parallel('images'))
    gulp.watch('src/js/.js', gulp.parallel('script'))

});

gulp.task('clean', async function () {
    del.sync('dist')
});

gulp.task('build', gulp.series('clean', 'export'))
gulp.task('default', gulp.parallel('scss', 'js', 'browser-sync', 
'watch', 'css'));