const{src, dest, watch, parallel} = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const plumber= require('gulp-plumber');

function css(done){
    src('src/scss/**/*.scss') //identificamos los archivos
    .pipe(plumber())
    .pipe(sass())   //compilamos los archivos
    .pipe(dest("build/css")); //*guardamos los archivos

    done();
}
function dev(done){
    watch('src/scss/**/*.scss', css);
    done();
}


exports.css = css;
exports.dev = dev;