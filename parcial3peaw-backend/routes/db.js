const express = require('express')
const router = express.Router()

const { getDatabase } = require('../controllers/db')

router.get('/getdb', getDatabase)

module.exports = router
