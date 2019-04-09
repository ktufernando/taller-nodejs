//BD
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

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB);
    }
}


getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});


//Ejercicio
/*let getSalario = (empleado) => {
    return new Promise();
};*/
