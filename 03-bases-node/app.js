const { crearArchivo, listarTabla } = require('./multiplicar/multiplica');
const { argv } = require('./configs/yargs');
const colors = require('colors');

let comando = argv._[0];

switch ( comando ) {
    case 'listar':
        console.log('listar');
        listarTabla( argv.base, argv.limite );
    break;
    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then( archivo => console.log(`Archivo ${ archivo.green } creado.`))
            .catch( e => console.log(e) );
    break;
    default:
        console.log('Comando no reconocido');1
}

console.log(argv);

// const express = require('express');
// const propios = requiere('./name');

//let base = 'a';
// console.log(process.argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

