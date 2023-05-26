const express = require('express')
require('dotenv').config()
const cors = require('cors')
const http = require('http')
const { Server } = require("socket.io")

const app = express()

// variables de entorno
app.use(express.static('public'))

const headers = {
  cors: {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173', 'localhost', 'http://localhost', '127.0.0.1', 'http://127.0.0.1']
  }
}
app.use(cors(headers))

// rutas
app.use('/api', require('./routes/db'))

const server = http.createServer(app)
const io = new Server(server)

// sockets
io.on('connection', (socket) => {
  console.log('Usuario conectado')

  socket.on('mensaje-enviado', (payload) => {
    console.log(`Mensaje por ${payload.emisor}: ${payload.mensaje}`)
    socket.broadcast.emit('mensaje-nuevo', payload)
  })

  socket.on('disconnect', (socket) => {
    console.log('Usuario desconectado')
  })
})

// correr el servidor
server.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puerto', process.env.PORT)
})
