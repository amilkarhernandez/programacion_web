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

function find_by_id(req, res){
    const id = req.params['id']

    Clients.findById({_id: id})
    .then((resp)=>{
        if(resp){
            res.status(200).send({
                status: 200,
                message: "Cliente Encontrado con exito",
                result: resp
            })
        }else{
            res.status(404).send({
                status: 404,
                message: "Cliente No Encontrado"
            })
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Ocurrio un erorr en el servidor"
        })
    })
}

function actualizar(req, res){

    const {id, identify, name, lastname, telephone, age} = req.body;

    Clients.findByIdAndUpdate({_id: id}, {identify: identify, name: name, lastname: lastname, telephone: telephone, age: age})
    .then((resp)=>{
        if(resp){
            res.status(200).send({
                status: 200,
                message: "Cliente Actualizado con exito",
                result: resp
            })
        }else{
            res.status(302).send({
                status: 302,
                message: "El cliente no se pudo actualizar"
            })
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Ocurrio un erorr en el servidor"
        })
    })

}

function eliminar(req, res){
    const id = req.params['id']

    Clients.findByIdAndDelete({_id: id})
    .then((resp)=>{
        if(resp){
            res.status(200).send({
                status: 200,
                message: "Cliente Eliminado con exito"
            })
        }else{
            res.status(302).send({
                status: 302,
                message: "El cliente no se pudo Eliminar"
            })
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Ocurrio un erorr en el servidor"
        })
    })
}

module.exports = {
    listar,
    create,
    findByIdentify,
    find_by_id,
    actualizar,
    eliminar
}