var gulp = require('gulp');
gulp.task('default', function () {
});

const { watch, series, parallel, src, dest } = require("gulp");
//Tarea Hola Mundo
function holamundo(cb) {
 console.log("HOLA:" + Date.now());
 cb();
}
//Tarea Adios Mundo
function adiosmundo(cb) {
 console.log("ADIOS:" + Date.now());
 cb();
}
//Declaro las tareas públicas con exports
exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.default = holamundo;