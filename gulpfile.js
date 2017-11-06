var   path = require('path') ,
      gulp = require('gulp')
      handlebars = require('gulp-handlebars'),
      wrap = require('gulp-wrap'),
      declare = require('gulp-declare'),
      concat = require('gulp-concat');

gulp.task('templates', function(){
  gulp.src('_source/templates-partials/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('_dist/js/'));
});
