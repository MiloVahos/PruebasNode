const http = require('http');

// Crear el servidor
http.createServer( (req, res) => {

    // res.write(' Hola mundo ');
    res.writeHead( 200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Camilo',
        edad: 23,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(8085);

console.log('Escuchando el puerto 8085');