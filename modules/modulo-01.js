console.log('Executando modelo-01.js');

// Essa função não será exportada, será uma função interna
const oculta = ()=>{
    console.log('Execultado a função oculta')
}
/* porém se tirar a propriedade "const", deixando apenas "oculta", ele ainda será lido se chamar
   do mode importação por desestruturação:
   //No arquivo modulo-02...
   const {exculta} = require('./modulo-01') // vai ler também a função "oculta" se não tiver uma
   atribuição como o "const"
*/

// Funções para exportação:
const executa = ()=>{
    console.log('Execultado a função execulta')
}
const welcome = 'Bem-vindo(a) ao arquivo de módulos-01.js'


module.exports = {executa, welcome}


/*
MANIPULAR ESSE "MÓDULO" EM OUTRO ARQUIVO

const f1 = require('./modulo-01.js')
console.log(`O valor é ${fi.executa()}`);

// ou 

const {welcome} = require('./modulo-01.js')
console.log(`O valor é ${welcome}`);

// ou apenas o "require" para incluir o arquivo inteiro (porém ele não vai respeitar as funções de exportação e as que são ocultas)

require('./modulo-01.js') // é como fosse um arquivo dentro de outro
*/
