let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getDescripcion: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};

//console.log(deadpool.getDescripcion());

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;
//let funcion = deadpool.getDescripcion;
//console.log(nombre, apellido, poder);

//let { nombre, apellido, poder } = deadpool;
//console.log(nombre, apellido, poder);


//let { nombre: primerNombre, apellido, poder } = deadpool;
//console.log(primerNombre, apellido, poder);