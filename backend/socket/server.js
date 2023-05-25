const { Server } = require("socket.io")
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('Usuario conectado')

  socket.on('mensaje-enviado', (payload, callback) => {
    console.log(payload)
    callback('Mensaje recibido')

    io.emit('mensaje-emitido', payload)
  })
})

io.on('disconnect', (socket) => {
  console.log('Usuario desconectado')
})