const { Schema, model } = require('mongoose')

const MensajeSchema = Schema({
  id: {
    type: String,
    require: true
  },
  mensaje: {
    type: String,
    require: true
  },
  emisor: {
    type: String,
    require: true
  }
})

module.exports = model('Mensaje', MensajeSchema)
