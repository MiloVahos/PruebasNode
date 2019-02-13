const express = require('express');
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + '/public' ) );
// Express HBS
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
  let palabras = texto.split(' ');
  palabras.forEach( (palabra, idv) => {
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  return palabras.join(' ');

});

app.get('/', (req, res) => {
  // res.send('Hello World')
    /*let salida = {
        nombre: 'Camilo',
        edad: 23,
        url: req.url
    }*/
    //res.send(salida);
    res.render('Home', {
      nombre: 'Camilo',
      anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
      anio: new Date().getFullYear()
    });
});
 
app.listen(3000)