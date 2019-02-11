var express = require('express')
var app = express();

app.use( express.static( __dirname + '/public' ) )

app.get('/', (req, res) => {
  // res.send('Hello World')
    let salida = {
        nombre: 'Camilo',
        edad: 23,
        url: req.url
    }
    res.send(salida);
});
 
app.listen(3000)