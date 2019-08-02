// ====================
// VERFICIAR TOKEN
// ====================

// CLIENT ID 994192961390-f6fkrabiqsfdss41n7akmsvq4k1k8q6f.apps.googleusercontent.com
// secret B9InAcgdYMCo6WYSI7AO7K8H

const jwt = require('jsonwebtoken');

let verificaToken = ( req, res, next ) => {
  let token = req.get('token');
  jwt.verify(token,process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token inválido",
        }
      });
    }
    req.usuario = decoded.usuario;
    next();
  });
};


let verificaAdminRole = ( req, res, next ) => {
  let usuario = req.usuario;
  if( usuario.role === "ADMIN_ROLE" ) {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      err: {
        message: "No eres administrador",
      }
    });
  }
}

let verificaTokenImg = ( req, res, next ) => {
  let token = req.query.token;
  jwt.verify(token,process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token inválido",
        }
      });
    }
    req.usuario = decoded.usuario;
    next();
  });
}

module.exports = { verificaToken, verificaAdminRole, verificaTokenImg };