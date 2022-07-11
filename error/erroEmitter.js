const {EventEmitter} = require("events")
const Evento = new EventEmitter()

const ValidadeObjeto = (a) =>{
    if(typeof a !== 'object'){
        Evento.emit('erro', new Error('O parâmetro não é um Objeto.'))
    }else{
        console.log('Objeto validado!')
    }
}

// pode ser usado o ".on" também
Evento.addListener('erro',(err)=>{
    console.log(`Erro! Mensagem: ${err.message}`)
})

let dados = {nome: 'Josué', lastname: 'Souza'}

ValidadeObjeto(dados);
ValidadeObjeto('123');