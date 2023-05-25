const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    ok: true
  })
})

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en ', process.env.PORT)
})
