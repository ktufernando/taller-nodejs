let {getUsuario} = require('./usuarios/usuarios');

console.log('Inicio de Programa...');

getUsuario(1, function(usuario1){
    console.log('Usuario 1: ' + usuario1);
});

getUsuario(2, function(usuario2){
    console.log('Usuario 2: ' + usuario2);
});

console.log('... Fin de Programa');