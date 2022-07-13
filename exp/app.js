// FORMA NÃO PRATICA DE FAZER AS ROTAS / ROUTES colocando todo num único arquivo
// O CORRETO É TER UMA PASTA "routes" para cada rota

const express = require('express')
const app = express()
const adminRoutes = require("./routes/admin")
const usuarioRoutes = require("./routes/usuarios")
const cookieparse = require('cookie-parser')

// Indicando a pasta "public" como stática
// Ela já vai carregar o index.html automaticamente e renderiza
// O static vai sobrepor o app.get('/',...) mais abaixo. Se quiser mudar isso
// Você pode definir uma rota para os arquivo estáticos: Ex:
// app.use('/statics',express.static('public'))
app.use(express.static('public'))

// Usando uma outra rota para abrir outra página html
app.use('/sobre', express.static('public/sobre.html'))

// O Metodo USE já o Middleware do Express
app.use(express.json())

// Usando Middleware de terceiros
app.use(cookieparse())

// Criando uma função direta de Middleware
app.use((req,res,next)=>{

    console.log('Executando Middleware em nivel de aplicação.')

    return next();
})

app.get('/',(req,resp)=>{
    resp.send('Vai Corinthians')
})

app.get('/setcookie',(req,resp)=>{
    // IMP: Caracteres com acentos dão erro na hora de exibir ou não processam
    resp.cookie('user','Josué', {maxAge: 900000, httpOnly: true})
    return resp.send('Cookie foi gravado com sucesso')
})
app.get('/getcookie',(req,resp)=>{
    let cookie = req.cookies['user'];
    if(cookie){
        return resp.send(cookie)
    }else{
        return resp.send('NÃO EXISTEM COOKIES PARA EXIBIR!')
    }
})


// As rotas que estavam aqui, foram transferidas para a pasta routes
// usando o Middleware para informar a rota caso algum usuário passe /admin na URL
app.use('/admin', adminRoutes)
app.use('/usuarios', usuarioRoutes)



// Tratamentos de erros (É ideal que fiquem por último antes no .listen)
// Simulando um erro
app.get('/lalal',(req,resp,next)=>{
    setImmediate(()=>{
        next( new Error('Temos um problema!') )
    })
})

// Tratando o erro
app.use((err,req,resp,next)=>{
    console.log(err.stack)
    resp.status(500).json({message: err.message})
})

app.listen(3000, ()=>{
    console.log(`Server rodando na localhost:3000`)
})