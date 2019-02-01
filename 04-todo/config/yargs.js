const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}
const optsBorrar = {
    descripcion: {
        demand: true,
        alias: 'b',
        desc: 'Descripción de la tarea por borrar'
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
                .command('borrar','Borrar un elemento por hacer', optsBorrar)
                .help()
                .argv;

module.exports = {
    argv
}