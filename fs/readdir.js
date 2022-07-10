const fs = require("fs")
// lendo arquivos e pastas do diretório anterior (se eu quisesse ler do atual era só colocar '__dirname' sem as aspas)
fs.readdir('../', (err, data)=>{
    if (err) throw err;

    data.forEach((files)=>{
        console.log(`${__dirname}\\${files}`)
    })
})