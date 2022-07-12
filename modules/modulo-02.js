//require('./modulo-01') // Dessa maneira importa o arquivo inteiro (Le tudo), sem respeitar os modulos de exportação
const mod01 = require('./modulo-01')

//executando uma função exportada (exportado do modo "Le tudo")
//executa()

// se o modulo-01 for exportado apenas com o require('./modulo-01') ele também vai ler essa função
//oculta()

mod01.executa()
mod01.welcome
//mod01.oculta() // não vai funcionar agora