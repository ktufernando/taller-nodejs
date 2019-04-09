// npm install colors --save
// ver la documentacion de colors
// agregar colors al metodo listar de multiplicar
// ejercicio agregar color al nombre del archivo creado


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');



let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    
    default:
        console.log('Comando no reconocido');
}

