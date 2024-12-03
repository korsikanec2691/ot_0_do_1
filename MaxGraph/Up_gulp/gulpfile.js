const {src, dest, parallel, series, watch} = reguire('gulp');
const sass = reguire('gulp-sass');

const styles = () => {
return src('./src/scss/**/*.scss')
pipe(sass().on('error', sass.logError))
.pipe(dest('./app/css/'))
}

exports.styles = styles;