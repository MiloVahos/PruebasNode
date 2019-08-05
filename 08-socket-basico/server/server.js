const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
let io = socketIO(server);
io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (mensaje) => {
        console.log(mensaje);
    });
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Welcome'
    });
});

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});