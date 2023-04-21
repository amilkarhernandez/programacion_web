const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const client_routes = require('./routes/Clientes_route')

const port = process.env.PORT || 8000;

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const MONGO_URL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&authSource=admin`
mongoose.connect(MONGO_URL,
    {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log("Application Start")
        app.listen(port, function(){
            console.log("Servidor Conectado en ---> "+ port)
        });
    })
    .catch((err)=>{
        console.log(err)
        throw err;
    })

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//Conect Routes
app.use('/api', client_routes)

//Cors
app.use((req,res,next)=>{
    res.header('Content-Type: application/json');
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

module.exports = app