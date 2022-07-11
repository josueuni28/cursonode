console.log('Executando modelo-01.js');

// Essa função não será exportada, será uma função interna
const oculta = ()=>{
    console.log('Execultado a função oculta')
}

// Funções para exportação:
module.exports.executa = ()=>{
    console.log('Execultado a função execulta')
}
module.exports.welcome = 'Bem-vindo(a) ao arquivo de módulos-01.js'

/*
MANIPULAR ESSE "MÓDULO" EM OUTRO ARQUIVO

const f1 = require('./modulo-01.js')
console.log(`O valor é ${fi.executa()}`);

// ou 

const {welcome} = require('./modulo-01.js')
console.log(`O valor é ${welcome}`);
*/
