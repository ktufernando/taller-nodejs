const { crearArchivo } = require('./multiplicar/multiplicar-0.3');

let base = '2';

//Mostrar el module y los exports
//console.log(module);

//Ejercicio
crearArchivo(base)
    .then( archivo => console.log(`Archivo creado: ${archivo}`));
    //.catch(err => console.log(err));