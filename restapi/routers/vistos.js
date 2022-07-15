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
    const corpo = `${req.body}Login: ${req.body.login}\nSenha: ${req.body.senha}`
    resp.send(req.body)
})

module.exports = router