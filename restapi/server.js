require('dotenv').config()
const express = require('express')
//const bodyParse = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//app.use(bodyParse.urlencoded({extended:true})) Não foi necessário nesse projeto chamar o body-parse,
//porem se der algum erro diferente pode ser por falta dele
app.use(express.json())

const subscribersRoute = require('./routers/subscribers')
const vistosRoute = require('./routers/vistos')

app.use('/subscribers',subscribersRoute)
app.use('/vistos',vistosRoute)


mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
});
db.once('open',()=>{
    console.log('Banco de dados conectado.')
})

app.use(express.json())

app.listen(3000, ()=>{
    console.log(`Server rodando no localhost ${Date.now()}`)
})