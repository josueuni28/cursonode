// Evolução do arquivo promises.js usando Async
function soma(x){
    return new Promise((resolve, reject) => {
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('O valor inserido não é um número.')
        }
        setTimeout(()=>{
            resolve(x + 10);
        },3000)
    })
}

async function principal(val){
    try {
        const resultado = await soma(val);
        console.log(`Deu certo. Resultado: ${resultado}`);
    } catch (err) {
        console.log(`Erro: ${err}`);
    }
}

principal(10);