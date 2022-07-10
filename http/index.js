const http = require("http")
const host = "127.0.0.1"
const port = 3000
const url = `http://${host}:${port}`

const cmd = require("child_process")
const open = (process.platform == 'darwin' ? 'open': process.platform == 'win32' ? 'start' : 'xdg-open')

const server = http.createServer((require, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html; charset=utf-8');
    response.end('<h1>Olá mundo</h1>Servidor rodando com sucesso!');
})

server.listen(port, host, ()=>{
    console.log(`Server rodando no endereço http://${host}:${port}`)
})

// para abrir o servidor no browser assim que executar
cmd.exec(`${open} ${url}`)