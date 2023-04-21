const Clients = require("../models/Clients")

function listar(req, res){
    Clients.find()
    .then((resp)=>{
        if(resp){
            res.status(200).send({
                status: 200,
                message: "Succes data fecth",
                result: resp
            })
        }else{
            res.status(404).send({
                status: 404,
                message: "No hay datos"
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

function create(req, res){
    const params = req.body;
    const client = new Clients;

    client.identify = params.identify;
    client.name = params.name;
    client.lastname = params.lastname;
    client.telephone = params.telephone;
    client.age = params.age;

    client.save()
    .then((client_save)=>{
        if(client_save){
            res.status(201).send({
                status:201,
                menssage: "Guardado con Exito",
                result: client_save
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })


}

function findByIdentify(req, res){
    const {identify} = req.body;

    Clients.findOne({identify: identify})
    .then((resp) =>{
        if(resp){
            res.status(200).send({
                status: 200,
                message: "Cliente Encontrado con exito",
                result: resp
            })
        }else{
            res.status(404).send({
                status: 404,
                message: "El cliente no se encuentra en el sistema"
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })

}

module.exports = {
    listar,
    create,
    findByIdentify
}