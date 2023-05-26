const express = require('express')

const getDatabase = (req, res = express.request) => {
  res.json({
    ok: true,
    data: {
      emisor: 'SISTEMA',
      mensaje: 'Mensaje almacenado en el backend de prueba.'
    }
  })
}

module.exports = {
  getDatabase
}
