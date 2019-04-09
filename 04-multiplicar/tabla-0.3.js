const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '2';

//Mostrar el module y los exports
//console.log(module);

//Ejercicio
crearArchivo(base)
    .then( archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));
