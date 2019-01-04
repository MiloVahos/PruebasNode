const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
                .command('actualizar','Actualiza el estado completado de una tarea', optsActualizar)
                .command('crear','Crear un elemento por hacer', optsCrear)
                .help()
                .argv;

module.exports = {
    argv
}