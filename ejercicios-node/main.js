var msj = require('./mensajes');
var persona = require('./persona');
var modulo=require('./miModulo');

console.log(msj);
console.log(msj);
console.log(msj.curso);
console.log(msj.calificaciones.Espanol);
msj.log('desde el main');
console.log(msj.gM());

var p1 = new persona('cesar','alvarez');
console.log(p1.miNombre());

console.log(modulo);

