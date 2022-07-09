const crypto = require("crypto");
const start = Date.now();

// Testando o acionamento dos 4 núcleos do processador pelo NodeJS, quando for necessário.
// No caso de Conexão Não-Bloqueante, sem ser Assíncrona (Sync).

// NOTA: O NodeJS é Single-Thread, porém em casos expicionais ele utiliza do Mult-Thread
function logHashTime(){
    crypto.pbkdf2("a","b",100000,512,"sha512",()=>{
        console.log(`Tempo levado: ${Date.now() - start}ms`);
    })
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
//Por padrão ele usa 4 núcleos quando necessário (nesse caso, criptografando), por isso
//Essa ultima chamada que é a 5ª demora mais, porque ele espera um dos 4 liberar para incluir a proxima chamda
logHashTime();