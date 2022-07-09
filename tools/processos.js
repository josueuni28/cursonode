require("./subdir/sub")

console.log('-------------')
console.log('Nome do arquiivo: ',__filename)
console.log('Diretório (raiz): ',__dirname)
console.log('Diretório: ',process.cwd()) // para ver a descrição da diferença acessar o arquivo "sub.js" em "subdir"
console.log('Parâmetros de execução:',process.argv)
console.log('Ambiente do servidor:',process.platform)
console.log('Parâmetros de execução:',process.env)
// O "env" é muito grande, tem muitas variáveis do sistema e servidor que podem ser lidas e tratadas.


// se colocar um terceiro argumento o código vai analizar... ex: node processos -a
switch (process.argv[2]) {
    case '-a':
        console.log('Abrir a aplicação.');
        break;
    case '-u':
        console.log('Verificar atualizações.');
        break;
    case '-e':
        console.log('Fechar aplicação.');
        process.exit();
        break;
    default:
        console.log('Sem parâmetros específicos');
        break;
}


console.log('Recurso...')