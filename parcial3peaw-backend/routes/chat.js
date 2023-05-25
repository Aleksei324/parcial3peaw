const express = require('express')
const router = express.Router()

const { crearUsuario } = require('../controllers/chat')

router.get('/', crearUsuario)

module.exports = router
