const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/usuario', function(req,res) {
  res.json('Get usuario');
});

app.post('/usuario/:id', function(req,res) {
  let id = req.params.id;
  let body = req.body;

  if ( body.Nombre === undefined ) {
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    })
  } else {
    res.json({id, body});
  }
  
});

app.listen(3000, () => {
  console.log('Escuchando puerto', 3000);
});