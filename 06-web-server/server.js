const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) );
// Express HBS
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // res.send('Hello World')
    /*let salida = {
        nombre: 'Camilo',
        edad: 23,
        url: req.url
    }*/
    //res.send(salida);
    res.render('Home', {
      nombre: 'camilo vAhoS',
      anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
      anio: new Date().getFullYear()
    });
});
 
app.listen(port, () => {
  console.log( `Escuhando el puerto ${port}`);
});