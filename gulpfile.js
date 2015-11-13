var gulp = require('gulp'),
	bower = require('bower'),
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync').create(),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	postcss = require('gulp-postcss'),
	rename = require('gulp-rename'),
	svgstore = require('gulp-svgstore'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	sass = require('gulp-sass');

gulp.task('css', function(){
	return gulp.src('./app/dev/sass/*.scss')
		.pipe(sass())
		.pipe(postcss([ autoprefixer({ 
			browsers: ["not ie < 9", "ff >= 10", "ios_saf >= 4.1", "Safari >= 4", "Chrome > 15", "and_chr 46", "Opera 15", "not Android < 3"],
			cascade: true
		}) ]))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./app/prod/css/'));
});

gulp.task('js', function(){
	return gulp.src('./app/dev/js/*.js')
		// .pipe(gulp.dest('./app/prod/js/'))
		// .pipe(gulp.src('./app/dev/js/*.js'))
		// .pipe(uglify())
		// .pipe(rename({
		// 	suffix: '.min'
		// }))
		.pipe(gulp.dest('./app/prod/js/'));
});

gulp.task('sync', function(){
	browserSync.init({
		server: {
			baseDir: "./app/"
		}
	})
});



gulp.task('libcss', function(){
	return gulp.src('./bower_components/**/*.css')
		.pipe(concat('lib.css'))
		.pipe(gulp.dest('./app/prod/css/'));
});

gulp.task('default', ['sync', 'libcss'], function(){
	gulp.watch('./app/*.html', browserSync.reload );
	gulp.watch('./app/dev/js/*.js', ['js'], browserSync.reload );
	gulp.watch('./app/dev/sass/*.scss', ['css']);
	gulp.watch("./app/prod/css/*.css", browserSync.reload)
});
