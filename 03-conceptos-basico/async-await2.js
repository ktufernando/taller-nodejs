let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melina'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB);
        }
    });
}



//Ejercicio: Hacer la funcion getSalario empleando async

//Ejercicio: Desarrollar un metodo getInformacion que ejecute con await las funciones getEmepleado y getSalario, retornando un mensaje con la información obtenida


getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));