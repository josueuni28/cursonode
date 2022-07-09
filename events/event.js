const EventEmmiter = require("events");

class Evento extends EventEmmiter {}
const MeuEvento = new Evento()

MeuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento "seguranca": ${x} ${y}`)
})

MeuEvento.emit('seguranca','Marcos','Alterou a senha')