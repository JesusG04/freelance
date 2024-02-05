const{src, dest, watch, parallel} = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function css(done){
    src('src/scss/app.scss') //identificamos los archivos
    .pipe(sass())   //compilamos los archivos
    .on('error', sass.logError) // Agregamos manejo de errores
    .pipe(dest("build/css")); //*guardamos los archivos

    done();
}

exports.css = css;