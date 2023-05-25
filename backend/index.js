const express = require('express')
require('dotenv').config()

const app = express()

// variables de entorno
app.use(express.static('public'))

// rutas
app.use('/api/chat', require('./routes/chat'))

// correr el servidor
app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en ', process.env.PORT)
})
