const express = require('express')
const router = express.Router()

// não precisa colocar o '/admin' aqui, apenas '/' porque ele já foi informado no arquivo "app.js"
router.get('/',(req,resp)=>{
    resp.send('Autenticação requerida!')
})

router.get('/:user',(req,resp)=>{
    resp.send(`Você está autenticado com o usuário: ${req.params.user}`)
})

// veja o arquivo server.rest para entendo porque eu pego o "login" e "senha"
// são justamente os nomes dos argumentos da entrada enviada via json
router.post('/',(req,resp)=>{
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
    resp.send('Acessando o admin com o POST \n' + corpo)
})

// PATCH é uma derivação do PUT, a diferença é que altera pedaços/partes
router.patch('/:user',(req,resp)=>{
    resp.send(`Acessando admin via PATH ${req.params.user}`)
})

router.put('/:user',(req,resp)=>{
    resp.send(`Acessando admin via PUT ${req.params.user}`)
})
// DELETE para deletar uma informação
router.delete('/:user',(req,resp)=>{
    resp.send(`Acessando admin via DELETE ${req.params.user}`)
})

module.exports = router