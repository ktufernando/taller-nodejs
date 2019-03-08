//Uno
//console.log(process);

//Dos
//console.log(process.argv);
//nodemon tabla-0.4.js --base=5

//Tres
/*let argv = process.argv;
let parametro = argv[2];

console.log(parametro);
*/

//Cuatro
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

//ponerlo en tabla-0.3.js
//probar errores sin pasar parametros
//probar parametros pasando mas parametros "nodemon tabla-0.4.js --hasta=20 --base=5"
//necesitamos muchas validaciones
//resulto por paquetes


