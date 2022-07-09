// CONEXÃO BLOQUEANTE. ESPERA UM PROCESSO CONCLUIR PARA REALIZAR OUTRO.

const fs = require("fs");
console.log(process.hrtime.bigint()/60n);
console.log("Antes da leitura do arquivo.");

const dados = fs.readFileSync("file.txt");

console.log("Executando o console após a leitura do arquivo.");
console.log(process.hrtime.bigint()/60n);

