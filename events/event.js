const EvE = require("events");

class Evento extends EvE.EventEmitter {}
const MeuEvento = new Evento()

let num = 0;

function informa(){
    // subscriber - assinante
    MeuEvento.on('seguranca', (x,y)=>{
        console.log(`Executando o evento "seguranca": ${x} ${y}`)
    })
}
informa();

// publisher - emissor
MeuEvento.emit('seguranca','Marcos','Alterou a senha')

// Testando o EventEmitter
while(true){
    num++;
    if(num > 1000000){
        // A função não precisa ser chamada novamente para o codígo ser emitido dentro dela
        // Apos ser criado uma vez o Evento sempre vai ficar ativo esperando se tiver uma emissão
        MeuEvento.emit('seguranca','Vitor','Logou no sistema');
        break;
    }
}
