//Forma tradicional de pegar um módulo Node
const Buffer = require('buffer').Buffer
//import { Buffer } from 'buffer'; //Gera erro porque não importei o módulo para minha pasta de trabalho

const buf = Buffer.from('Josué Souza')

console.log(buf) // apresenta na forma binária, hexadecimal

console.log(buf.toString()) // apresenta de forma comum legível
console.log(buf.toString('utf16le')) // apresenta de forma convertida em outro encode

const buf_string = Buffer.from('Olá Mundo','utf-8') // setando o formato de forma direta

console.log(buf_string.toString())

console.log(Buffer.isBuffer(buf_string)) // Verificando o Buffer

console.log(buf_string.toString('latin1', 0, 5)) //Converto e pegando apenas uma parte

