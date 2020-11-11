const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render')
const postcss = require('gulp-postcss')
const del = require('del')
const browserSync = require('browser-sync').create()

gulp.task('css', function () {
  return gulp.src('src/styles.css')
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest('dist'))
})

gulp.task('render', function () {
  return gulp.src('src/pages/**/*.njk').pipe(nunjucksRender({
    path: ['src/templates']
  }))
  .pipe(gulp.dest('dist'))
})

gulp.task('images', function () {
  return gulp.src('src/images/**/*').pipe(gulp.dest('dist/images'))
})

gulp.task('clean', function () {
  return del('dist')
})

gulp.task('server', function() {
  browserSync.init({
    server: 'dist'
  })
  gulp.watch('src/images/*', gulp.series('images'))
  gulp.watch(['src/**/*', 'tailwind.config.js'], gulp.series('css', 'render'))
  gulp.watch('dist/**/*').on('change', browserSync.reload)
})

gulp.task('default', gulp.series('clean', 'css', 'render', 'images'))

gulp.task('dev', gulp.series('default', 'server'))
