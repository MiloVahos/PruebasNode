const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (mensaje, callback) => {
      client.broadcast.emit('enviarMensaje', mensaje);
        // if( mensaje.usuario ) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal'
        //     });
        // }
    });
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Welcome'
    });
});
