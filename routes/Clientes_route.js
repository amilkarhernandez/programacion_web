const express = require('express')
const ClientsController = require('../controllers/Clientes_controller')

const api = express.Router();

api.get('/clients', ClientsController.listar)
api.post('/clients', ClientsController.create)
api.post('/clients/find', ClientsController.findByIdentify)
api.get('/clients/:id', ClientsController.find_by_id)
api.put('/clients', ClientsController.actualizar)
api.delete('/clients/:id', ClientsController.eliminar)

module.exports = api;