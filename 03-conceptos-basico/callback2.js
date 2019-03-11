//BD
let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Adriana'
}, {
    id: 3,
    nombre: 'Damian'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

//Uno
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    callback(empleadoDB);
}
getEmpleado(2, (empleado) => {
    console.log(empleado);
});


//Ejercicio 1: Si no existe el empleado que devuelva el mensaje: `No existe un empleado con el ID ${ id }`
// Al llamar a la funcion se debe validar si el callback tiene error y mostrarlo en consola


// Ejercicio
// {
//     nombre: 'Adriana',
//     salario: 2000
// }

// No se encontró un salario para el usuario Damian

// Dentro del callbak getEmpleado, ejecuar la funcion getSalario