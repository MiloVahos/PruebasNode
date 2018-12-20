// REQUIREDS
const fs = require('fs');
// const express = require('express');
// const propios = requiere('./name');

let base = 4;
let data = '';

for ( let i = 1; i <= 10; i++ ) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo a sido creado');
});