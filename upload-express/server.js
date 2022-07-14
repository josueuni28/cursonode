const express = require('express')
const bodyParse = require('body-parser')
const multer = require('multer')
const path = require('path')
const app = express()

app.use(bodyParse.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'uploads/')
    },
    filename:(req,file,callback)=>{
        callback(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage})

app.get('/',(req,resp)=>{
    //resp.json({message: 'Bem-Vindo(a)'})
    resp.sendFile(__dirname+'/index.html')
})

//Usar .single para um arquivo, se quiser fazer o upload de varios arquivo de um vez usar .array
//colocar dentro do .single o nome do atributo "name" do input de upload da página "index.html"
app.post('/upload', upload.single('arquivo'), (req, resp, next)=>{
    const file = req.file
    if(!file){
        const err = new Error('Por favor selecione o arquivo')
        err.httpStatusCode = 400
        return next(err)
    }

    resp.send(`Arquivo <b>${file.originalname}</b> enviado com sucesso!<br>Nome do arquivo foi modificado para <b>${file.filename}</b>`)
    //resp.end('Arquivo enviado com sucesso') Também dá para fazer desse modo como finalização
})

app.listen(3000, '127.0.0.1', ()=>{
    console.log(`Server rodando na URL 127.0.0.1:3000`)
})