/**
 *  Async Await
 */

//Uno
let getNombre = () => {
    return 'Fernando';
};


console.log(getNombre());


let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${ nombre }`;

};


saludo().then(mensaje => {
    console.log(mensaje);
});

