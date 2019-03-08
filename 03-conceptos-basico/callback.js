// Uno
setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);


// Dos
/*let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }
    callback(usuario);
}

getUsuarioById(1, (usuario) => {

    console.log('Usuario de base de datos', usuario);

});*/

// Tres
/*let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe en la BD`);
    } else {
        callback(null, usuario);
    }


}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);

});*/