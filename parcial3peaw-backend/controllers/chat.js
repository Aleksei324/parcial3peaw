const express = require('express')

const crearUsuario = (req, res = express.request) => {
  res.json({
    ok: true
  })
}

module.exports = {
  crearUsuario
}
