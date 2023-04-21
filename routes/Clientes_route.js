const express = require('express')
const ClientsController = require('../controllers/Clientes_controller')

const api = express.Router();

api.get('/clients', ClientsController.listar)
api.post('/clients', ClientsController.create)
api.post('/clients/find', ClientsController.findByIdentify)

module.exports = api;