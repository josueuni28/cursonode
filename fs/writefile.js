const {writeFile} = require('fs')

writeFile('novoarquivo.txt','Criando um novo arquivo de texto.',err =>{
    if (err) throw err
    console.log('Arquivo criado com sucesso')
})