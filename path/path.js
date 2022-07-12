const path = require('path')

console.log('basename:',path.basename('C:\\Temp\\arquivo.html')) // Retorna apenas o nome do arquivo
console.log('normalize:',path.normalize('C:\/Temp/User//Local\\Imp/dir/..')) // Arruma o nome do caminho (lendo o comando final)
console.log('joi path:',path.join('/teste','teste2','teste3/teste4','dir','..')) // Junta os nomes e monta o caminho (lendo também os comando como ".." no final para voltar uma pasta)
console.log('resolve:',path.resolve('path.js')) // Mostra todo o caminho até esse arquivo
console.log('extension:',path.extname('path.js')) // Pega apenas a extensão do arquivo
console.log('dirname:',__dirname) // Pega o diretorio