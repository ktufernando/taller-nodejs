setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);


let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }
    callback(usuario);
}

//Ejercicio 1: Modificar la funcion getUsuarioById para que si llega el id "20", debe devolver un mensaje de error

//Ejercicio 2: Modificar el callback para gestionar el error