const gulp = require('gulp')
const del = require('del')
const postcss = require('gulp-postcss')
const cssSvg = require('gulp-css-svg')
const browserSync = require('browser-sync').create()

gulp.task('del', function () {
  return del('./dist')
})

gulp.task('icons', function () {
  return gulp.src('./src/icons/*.svg').pipe(gulp.dest('./dist/icons/'))
})

gulp.task('css', function () {
  return gulp.src('./src/css/styles.css').pipe(postcss()).pipe(cssSvg()).pipe(gulp.dest('./dist/'))
})

gulp.task('serve', function () {
  browserSync.init({
    serveStatic: ['.', './example'],
    server: {
      baseDir: './example',
    },
  })
})

gulp.task(
  'watch',
  gulp.series('serve', ['css', 'icons'], function (done) {
    gulp.watch('./src/css/**/*.css', gulp.series('css'))
    gulp.watch('./src/icons/*.svg', gulp.parallel(['css', 'icons']))

    gulp
      .watch(['./dist/icons/*.svg', './dist/*.css', './example/*.html', './example/**/*.js'])
      .on('change', browserSync.reload)
    done()
  }),
)

gulp.task('build', gulp.series(['del', gulp.parallel(['css', 'icons'])]))
