/**
 *  Async Await
 */

//Uno
let getNombre = () => {
    return 'Fernando';
};

//Dos
/*let getNombre = async() => {
    return 'Fernando';
};*/

//Tres
/*let getNombre = () => {
    return new Promise((resolve, reject) => {
        resolve('Fernando');
    });
}*/

//Uno, dos y tres
console.log(getNombre());

/*
    getNombre().then(nombre => {
        console.log(nombre)
    }).catch(err => {
        console.log('Error de Async', err);
    });

*/



/*let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Fernando');

        }, 3000);

    });
};


let saludo = async() => {

    let nombre = await getNombre();


    return `Hola ${ nombre }`;

};


saludo().then(mensaje => {
    console.log(mensaje);
});

*/