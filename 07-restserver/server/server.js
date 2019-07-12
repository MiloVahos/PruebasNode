require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect('mongodb://localhost:27017/cafe', 
                  { useNewUrlParser: true, useCreateIndex: true },
                  (err, resp) => {
  if ( err ) throw err;
  console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto', process.env.PORT);
});