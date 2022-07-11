console.log('Mensagem padrão')

console.error(new Error('Mensagem de erro'))

const carros = ['BMW','GM','Ford','FIAT','Renault','Jeep','Hyundai'];

console.table(carros)

const dados = {name: 'Josué', lastname: 'Souza', username: 'josueuni28'}

console.table(dados)

// Cria um encrementador visual
console.count('processo')
console.count('processo')
console.count('processo')
console.log('Resetando processo')
console.countReset('processo') // Reseta o contador "processo"
console.count('processo')

// Marcar o tempo que leva para um deteminado codigo ou trecho demora para processar.
let incr = 0;
console.time('marcador') // inicia o cronometro
for (let x = 0; x < 100; x++) {
    incr++  
}
console.timeEnd('marcador') // encerra o cronometro

// Exibe uma mensagem apenass no caso "false" 
console.assert(true,'Faça alguma coisa')

let test = 'World'
console.assert(false,'A informação %s deu erro',test)

// Limpa todos os dados do console
//console.clear()