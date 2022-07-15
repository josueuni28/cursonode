const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

router.get('/', async (req,resp)=>{
    try {
        const subscriber = await Subscriber.find()
        resp.json(subscriber)
    } catch (error) {
        resp.status(500).json({message: error.message})
    }
})

router.get('/:id', validadeId, (req,resp)=>{
    resp.json(resp.subscriber)
})

router.post('/', async (req,resp)=>{
    const subscriber = new Subscriber({
        userName: req.body.userName,
        userChannel: req.body.userChannel
    })

   //console.log(`nome: ${req.params.userName}\ncanal: ${req.params.userChannel}`)
   //O ".params" é para ser usado apenas na requisição GET e não no POST, no .post é o ".body"
   console.log(`nome: ${req.body.userName}\ncanal: ${req.body.userChannel}`)

    try {
        const newSub = await subscriber.save()
        resp.status(201).json(newSub)
    } catch (error) {
        resp.status(400).json({message: error.message})
    }
})

router.patch('/:id', validadeId, async (req,resp)=>{
    if(req.body.userName != null){
        resp.subscriber.userName = req.body.userName
    }
    if(req.body.userChannel != null){
        resp.subscriber.userChannel = req.body.userChannel
    }

    try {
        const updateSub = await resp.subscriber.save()
        resp.json(updateSub)
    } catch (error) {
        resp.status(400).json({message: error.message})
    }
})

router.delete('/:id', validadeId, async (req,resp)=>{
    const oid = resp.subscriber.id

    try {
        await resp.subscriber.remove()
        resp.json({message: `Inscrito ${oid} foi removido.`})
    } catch (error) {
        resp.status(500).json({message: error.message})
    }
})


async function validadeId(req,resp, next){
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return resp.status(404).json({message: 'Inscrito não encontrado.'})
        }
    } catch (error) {
        return resp.status(500).json({message: error.message})
    }

    resp.subscriber = subscriber;
    next()
}

module.exports = router