// FORMA CORRETA DE USAR CONEXÃO NÃO BLOQUEANTE, SEM MISTURAR BLOQUEANTE COM NÃO-BLOQUEANTE E EVITAR ERROS.

const fs = require("fs");
console.log("Antes da leitura do arquivo.");

const dados = fs.readFile("file.txt",(err,data)=>{
    if(err) throw err;
    console.log("Terminei a leitura do arquivo.");

    fs.unlink("file.txt",(errun)=>{
        if(errun) throw errun;
        console.log("Arquivo excluido com sucesso.");
    });
});


/* FORMA ERRADA, MISTURANDO CONEXÃO BLOQUEANTE COM NÃO-BLOQUEANTE E GERANDO ERRO.
fs.unlinkSync("file.txt");
console.log("Arquivo excluido com sucesso.");
*/