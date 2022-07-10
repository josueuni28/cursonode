const fs = require("fs")

fs.readFile('text.txt', (err, data)=>{
    if (err) throw err;

    console.log(data.toString());
})

/* Forma bloqueante (síncrona)
const texto = fs.readFileSync('text.txt')
console.log(`Resultado: ${texto}`);
*/