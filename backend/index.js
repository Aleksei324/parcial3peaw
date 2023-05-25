const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.json({
    ok: true
  })
})

app.use(express.static('public'))

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en ', process.env.PORT)
})
