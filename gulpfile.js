var   handlebars = require('gulp-handlebars'),
      wrap = require('gulp-wrap'),
      declare = require('gulp-declare'),
      concat = require('gulp-concat');

gulp.task('templates', function(){
  gulp.src('_source/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});
