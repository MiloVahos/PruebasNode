const argv = require('yargs')
                        .command('listar','Imprime en consola la tabla de multiplicar',{
                            base: {
                                demand: true,
                                alias: 'b'
                            },
                            limite: {
                                alias: 'l',
                                default: 10
                            }
                        })
                        .help()
                        .argv;

const { crearArchivo } = require('./multiplicar/multiplica');

let comando = argv._[0];

switch ( comando ) {
    case 'listar':
        console.log('listar');
    break;
    case 'crear':
        crearArchivo( argv.base )
            .then( archivo => console.log(`Archivo ${ archivo } creado.`))
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

