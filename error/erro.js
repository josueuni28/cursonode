/*
throw new Error('O comando gerou um erro')

console.log('Esse mensagem não é exibida porque o erro interrompe a aplicação')
*/

function execute(){
    executeTo()
}
function executeTo(){
    throw new Error('A função gerou um erro')
}

function main(){
    execute()
}

function init(){
    // Nesse caso a aplicação não é interrompida, ao acionar o erro ela pula para o "cath"
    try {
        main()
    } catch (e) {
        console.log(`Temos um problema: ${e.message}`)
    }
}

init();
console.log('Depois do erro')