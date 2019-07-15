const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const app = express();

app.post('/login', (req, res) => {
  let body = req.body;
  Usuario.findOne({ email: body.email }, ( err, usuarioDB ) => {
    if (err) {
      return res.status(500).json({ ok: false, err });
    }
    if(!usuarioDB) {
      if (err) {
        return res.status(400).json({ ok: false, err: { message: 'Usuario o contraseña incorrectos' } });
      }
    }
  });

  res.json({
    ok: true
  })

});

module.exports = app;