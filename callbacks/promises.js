// Evolução do arquivo callback.js usando Promises
function soma(x){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            return resolve(x + 10);
        },3000)
    })
}

soma(10).then((result)=>{
    console.log(`Resolvido: ${result}`)
})
// O tratamento de erro ".catch()" do reject não é obrigatório (nesse caso). 