var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion');
});
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});