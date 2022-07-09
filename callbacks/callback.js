// Criando um exemplo de Callback para lidar com situações assíncronas
// Esse exemplo é uma situação que a função soma precisa esperar um tempo (talvez buscando uma informação no banco de dados) para mostrar o resultado.
// Foi usado o setTimeout para simular o tempo de uma consulta.
function soma(x, callb){
    return setTimeout(()=>{
        return callb(null, x + 10)
    },3000)
}

function callbackSoma(err, data){
    if(err) throw err;
    console.log(data);
}

soma(10, callbackSoma);