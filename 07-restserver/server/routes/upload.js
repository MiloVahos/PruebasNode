const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const fs = require("fs");
const path = require("path");

const Usuario = require("../models/usuario");
const Producto = require("../models/productos");

app.use( fileUpload({ useTempFiles: true }) );

app.put('/upload/:tipo/:id', function(req, res) {
  let tipo = req.params.tipo;
  let id = req.params.id;
  if (!req.files) {
    return res.status(500).json({ ok: false, err: { message: 'No se ha seleccionado ningún archivo' } });
  }
  let archivo = req.files.archivo;

  // Extensiones permitidas
  let extensionesValidas = [ 'png', 'jpg', 'gif', 'jpeg' ];
  let nombreArchivo = archivo.name.split('.');
  let extension = nombreArchivo[nombreArchivo.length-1];
  if( extensionesValidas.indexOf(extension) < 0 ) {
    return res.status(400).json({
      ok: false,
      err: { message: 'Las extensiones permitidas son ' + extensionesValidas.join(', ') },
      ext: extension
    });
  }

  // Validar tipos
  let tipos = ['productos', 'usuarios'];
  if( tipos.indexOf(tipo) < 0 ) {
    return res.status(400).json({
      ok: false,
      err: { message: 'Los tipos permitidos son ' + tipos.join(', ') }
    });
  }
  
  let nuevoNombreArchivo = `${id}-${ new Date().getMilliseconds() }.${ extension }`
  archivo.mv(`uploads/${tipo}/${nuevoNombreArchivo}`, (err) => {
    if(err) {
      return res.status(500).json({ ok: false, err });
    }
    if(tipo === 'usuarios') {
      imagenUsuario(id, res, nuevoNombreArchivo);
    } else {
      imagenProducto(id, res, nuevoNombreArchivo);
    }
  });
});

function imagenUsuario(id, res, nombreArchivo) {
  Usuario.findById( id, (err, usuarioDB) => {
    if(err) {
      borrarArchivo(nombreArchivo, 'usuarios');
      return res.status(500).json({ ok: false, err });
    }
    if(!usuarioDB) {
      borrarArchivo(nombreArchivo, 'usuarios');
      return res.status(400).json({ ok: false, err: { message: 'Usuario no existe' } });
    }

    borrarArchivo(usuarioDB.img, 'usuarios');

    usuarioDB.img = nombreArchivo;
    usuarioDB.save( (err, usuarioGuardado) => {
      if(err) {
        return res.status(500).json({ ok: false, err });
      }
      res.json({
        ok: true,
        usuario: usuarioGuardado,
        img: nombreArchivo
      });
    });
  });
}

function imagenProducto(id, res, nombreArchivo) {
  Producto.findById( id, (err, productoDB) => {
    if(err) {
      borrarArchivo(nombreArchivo, 'productos');
      return res.status(500).json({ ok: false, err });
    }
    if(!productoDB) {
      borrarArchivo(nombreArchivo, 'productos');
      return res.status(400).json({ ok: false, err: { message: 'Producto no existe' } });
    }

    borrarArchivo(productoDB.img, 'productos');

    productoDB.img = nombreArchivo;
    productoDB.save( (err, productoGuardado) => {
      if(err) {
        return res.status(500).json({ ok: false, err });
      }
      res.json({
        ok: true,
        producto: productoGuardado,
        img: nombreArchivo
      });
    });
  });


}

function borrarArchivo(nombreImagen, tipo) { 
  let pathImagen = path.resolve(__dirname, `../../uploads/${ tipo }/${ nombreImagen }`);
  if( fs.existsSync(pathImagen) ) {
    fs.unlinkSync(pathImagen);
  }
}


module.exports = app;