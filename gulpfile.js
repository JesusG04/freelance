const{src, dest, watch, parallel} = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const plumber= require('gulp-plumber');

//imagenes
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');


function css(done){
    src('src/scss/**/*.scss') //identificamos los archivos
    .pipe(plumber())
    .pipe(sass())   //compilamos los archivos
    .pipe(dest("build/css")); //*guardamos los archivos

    done();
}

//Optimizar  imagenes
function imagenes(done){
    const opciones ={
        optimizationLevel: 3
    };
   src('src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin(opciones) ) )
        .pipe(dest('build/img'));
   done();
}

//Convertir imagenes formato webp
function versionWebp(done){
    const opciones = {
        quality:50
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));
    done();
}
//Convertir imagenes formato avif
function versionAvif(done){
    const opciones = {
        quality:50
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));
    done();
}




function dev(done){
    watch('src/scss/**/*.scss', css);
    done();
}


exports.css = css;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.imagenes = imagenes;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev);
