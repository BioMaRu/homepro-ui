const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const sync = require('gulp-sync')(gulp).sync

const sassOption = {
	outputStyle: 'compressed',
	includePaths: 'node_modules'
}

gulp.task('default', gulp.series(homepro, pageHome))

function homepro () {
	return gulp
		.src('./src/homepro-ui.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions']}))
		.pipe(
			rename({
				basename: 'homepro-ui',
				suffix: '.min',
				extname: '.css'
			})
		)
		.pipe(gulp.dest('./dist/'))
}

function pageHome () {
	return gulp
		.src('./src/page-home.scss')
		.pipe(sass(sassOption).on('error', sass.logError))
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions']}))
		.pipe(
			rename({
				basename: 'page-home',
				suffix: '.min',
				extname: '.css'
			})
		)
		.pipe(gulp.dest('./dist/'))
}
