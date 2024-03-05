const express = require("express")
const app = express()
const create = require("./banco")

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
})

app.get("/", function(req, res){
    res.end("Pag Inicial")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    create(
        req.params.nome,
        req.params.endereco,
        req.params.bairro,
        req.params.cep,
        req.params.cidade,
        req.params.estado,
        req.params.observacao )
})
