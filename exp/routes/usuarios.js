const express = require('express')
const router = express.Router()

function logReq(req,res,next){

    console.log('Executando Middleware em nível de rota usuáros')

    return next();
}

// passando a função de Middleware na rota
router.get('/',logReq,(req,resp)=>{
    resp.send('Listando os usuários...')
})

router.get('/:user',(req,resp)=>{
    resp.send(`Mostrando o usuário: ${req.params.user}`)
})

module.exports = router