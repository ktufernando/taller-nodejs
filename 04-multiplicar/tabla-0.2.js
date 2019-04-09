const fs = require('fs');

let base = 3;
//let data = '';

for(let i = 1; i <= 10; i++){
   console.log(`${base} * ${i} = ${base*i}\n`);
   //data += `${base} * ${i} = ${base*i}`;
   //data += `${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(`tabla-3.txt`, 'Hola Mundo', (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-2.txt ha sido creado`);
});


/*fs.writeFile(`tabla-3.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-2.txt ha sido creado`);
});*/

/*fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});*/