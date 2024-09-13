const express = require('express')
const route = express.Router()
const controller = require('../controller/cliente-controller')



route.get('/', controller.get)

route.post('/', controller.post)

route.put("/:id", controller.put)

module.exports = route