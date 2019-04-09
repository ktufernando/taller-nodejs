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

//Uno
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

getEmpleado(10).then(empleado => {

    console.log('Empleado de BD', empleado);

});

//Dos
/*getEmpleado(10).then(empleado => {
    console.log('Empleado de BD', empleado);
}).catch(error => {
    console.log(error);
});*/


//Ejercicio
/*let getSalario = (empleado) => {
    return new Promise();
};*/

//Tres
/*let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    });
}


getEmpleado(10).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El saladio de ${ resp.nombre } es de ${ resp.salario }`);
    })
    .catch(err => {
        console.log(err);
    });*/