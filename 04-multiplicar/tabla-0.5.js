// npm init
// buscar npm yargs
// npm install yargs --save
// node tabla-04.js listar base=10 limit=20
// mostrar logs para comparar argv y argv de yargs
// ver en la pagina de yargs que puede hacer
// codear el command y probar el crearArchivo
// mostrar en logs el argv._
// tomar el comando y hacer switch
// hacer el listar
// mandar a config el yargs

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('yargs').argv;
let argv2 = process.argv;

console.log(argv);
console.log(argv2);


/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar',
    {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar',
    {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;*/



//console.log(`base ${argv.base}`);
//console.log(`limite ${argv.limite}`);

//const argv = require('./config/yargs').argv;


//console.log(argv._)

/*let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    
    default:
        console.log('Comando no reconocido');
}*/


/* Ejercicio:

en multiplicar.js hacer la funcion
let listarTabla = (base, limite) => {}

*/

/* Ejercicio:

Agregar limite a crearArchivo

*/