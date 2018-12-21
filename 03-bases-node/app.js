const { crearArchivo } = require('./multiplicar/multiplica')
// const express = require('express');
// const propios = requiere('./name');

//let base = 'a';
// console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base)
    .then( archivo => console.log(`Archivo ${ archivo } creado.`))
    .catch( e => console.log(e) );