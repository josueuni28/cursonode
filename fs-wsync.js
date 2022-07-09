// CONEXÃO NÃO BLOQUEANTE. FAZ DOIS PROCESSOS AO MESMO TEMPO.

const fs = require("fs");
console.log(process.hrtime.bigint()/60n);
console.log("Antes da leitura do arquivo.");

const dados = fs.readFile("file.txt",(err,data)=>{
    if(err) throw err;
    console.log("Terminei a leitura do arquivo.");
});

console.log("Executando o console após a leitura do arquivo.");
console.log(process.hrtime.bigint()/60n);