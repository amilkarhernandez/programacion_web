const mongoose = require('mongoose')
const schema = mongoose.Schema

const ClientsSchema = schema({
    identify: String,
    name: String,
    lastname: String,
    telephone: String,
    age: Number
})

module.exports = mongoose.model('clients_collections', ClientsSchema)