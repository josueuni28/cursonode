require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const subscribersRoute = require('./routers/subscribers')
app.use('/subscribers',subscribersRoute)


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