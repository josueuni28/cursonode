const {spawn} = require('child_process')
const ls = spawn('ls',['..','-lh','/usr']) // listando arquivos e pastas do diretório anterior
// Com o metodo "spawn" e necessário passar os argumentos como array se escrevesse "ls .." (como no terminal, gera erro)

ls.stdout.on('data', (data)=>{
    console.log(`strOUT: ${data}`)
})

// Ex: Se passar o argumento final "/usr" sem a barra ele acina esse evento de erro
ls.stderr.on('data', (data)=>{
    console.log(`strERR (Erro): ${data}`)
})

ls.on('close',(code)=>{
    console.log(`Processo em segundo plano finalizado com o código ${code}`)
})

/*
O "spawn" é útil quando você precisa executar processos em segundo plano, mandar e receber informações,
como exemplo abrir uma aplicação passando dados e receber o retorno dessa operação
*/