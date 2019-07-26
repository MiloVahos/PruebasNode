require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routes/index'));

// Habilitar la carpeta publica
app.use(express.static( path.resolve(__dirname ,'../public' )));

mongoose.connect('mongodb://localhost:27017/cafe', 
                  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
                  (err, resp) => {
  if ( err ) throw err;
  console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto', process.env.PORT);
});