const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('sass', () =>
  gulp.src('src/sass/styles.scss')
    .pipe(sass()).pipe(gulp.dest('css'))
);
gulp.task('babel', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('js'))
);

gulp.task('watch', () =>{
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/**/*.js', ['babel']);
});
