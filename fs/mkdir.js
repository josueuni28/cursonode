const fs = require("fs")
const name = 'projetotest'
const subdir = 'assets/images/logos'

const np = 'novoprojeto'
const pastas = ['css','js','images','lib','fonts']
const arquivos = ['index.html','style.css','script.js']
const ch = '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Documento</title>\n</head>\n<body>\n    <div id="game"></div>\n</body>\n</html>'

fs.mkdir(name,(err)=>{
    if(err) throw err;

    console.log(`Diretorio "${name}" criado com sucesso.`)
})

//Para criar subdiretórios que não existam (de uma única vez)
fs.mkdir(subdir,{recursive: true},(err)=>{
    if(err) throw err;

    console.log(`Subdiretórios "${subdir}" criados com sucesso.`)
})

// Cria a base de um projeto Web novo, com as pastas e arquivos essenciais
function make(n,dir){
    //tive que usar o Sync primeiro para não dar o erro de não encotrar a pasta (por não ter sido criado ainda)
    if(!fs.existsSync(n)){
        fs.mkdir(n,()=>{
            console.log(`Diretorio "${n}" criado.`);
            fs.writeFile(`${n}\\${arquivos[0]}`,ch,err=>{
                if(err) throw err;
                console.log(`${arquivos[0]} criado.`)
            });
        });
    }

    dir.forEach(item => {
        let odir = `${n}\\${item}`;

        fs.mkdir(odir,{recursive: true},(err)=>{
            if(err) throw err;
        
            console.log(`Subdiretorio "${item}" criado.`)
            
            if(item == 'js'){
                createArq(arquivos[2],'// Começar código :)',odir)
                    .then(() => console.log(`${arquivos[2]} criado com sucesso`))
                    .catch(err => console.log(`Erro: ${err}`))
            }else if(item == 'css'){
                createArq(arquivos[1],'/* Começar o estilo :) */',odir)
                    .then(() => console.log(`${arquivos[2]} criado com sucesso`))
                    .catch(err => console.log(`Erro: ${err}`))
            }
            
        })
    });
}

//utilizando promise
function createArq(name,conteudo,dir = ''){
    let end = (dir == '') ? name : dir+'\\'+name;

    return new Promise((resolve, reject) => {
        fs.writeFile(end,conteudo, err =>{
            if (err) throw err
            resolve()
        })
    })
}


make(np,pastas)