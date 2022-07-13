const fs = require("fs")
const path = require('path')
const {spawn} = require('child_process')

// [0]node [1]video [2]./pasta [3]arquivo.mp4(COM A EXTENSÃO) 
const parent = process.argv[2]
const arquivo = process.argv[3]
let videos = [];

const exts = ['.mp4','.mov','.avi','.wmv']
const psave = 'result'
const dirp = __dirname
const alldir = dirp + '/' + psave
const pth = path.resolve(parent)

/*
  Como fiz umas modificações do projeto Original da aula,
  ainda não esta totalmente em sincronia, mas está funcionando certinho:

  - Modifiquei para comprimir de uma unica vez todos os videos da pasta (Sem precisar passar todos os nomes).
  - E ele já cria (Se não tiver) a pasta "result" e joga o(s) arquivo(s) convertido(s) nela.

  Talvez um callback ou emitter resolva 100% e preciso ler a documentação do FFMPEG para tentar
  sanar erros internos que ele está gerando na compressão.

  PARA USAR é bem simples:

  node video <diretorio> ?<nomedovideo>

  <diretorio>: especificar um diretorio, para usar na pasta atual só digitar "./" (sem as aspas).
  <nomedovideo>: especifar o nome do video ( com a extensão Ex: video.mp4 ) porém não é obrigatório, se não incluir ele vai comprimir todos os arquivos de video que encontrar na pasta indicada.

  Exemplos:
  node video ./ vinheta.mp4
  node video ./
  node video ./cursos/
*/

if(!fs.existsSync(alldir)){
    fs.mkdir(psave,(err)=>{
        if(err) throw err;

        console.log(`Diretorio "${psave}" criado.`);
        props();
    })
}else{
    props();
}

function props(){
    if(parent){
        console.log(pth);

        if(arquivo){
            let ma = path.normalize(pth + '/' + arquivo)
            if(!fs.existsSync(ma)){
                console.log('ERRO: O Arquivo informado não existe.')
            }else{
                videos.push(arquivo);
                
                processa();
            }
        }else{
            // converter todos os arquivos da pasta
            fs.readdir('./', (err, data)=>{
                if (err) throw err;
            
                data.forEach((files)=>{
                    if (exts.indexOf( path.extname(files) ) >= 0){
                        videos.push(files);
                        console.log(files);
                    }
                })
                //mesmo comentário acima, callback ou emitter.
                processa();
            })
        }

    }else{
        console.log('Erro: Você precisa passar os parâmetros')
    }
}

function resize(video,quality){
    const p = new Promise((resolve, reject) => {
        let saida = path.normalize(`${alldir}/${quality}-${video}`);

        const ffmpeg = spawn('./ffmpeg/bin/ffmpeg', [
            '-i',
            `${video}`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${saida}`
        ])

        ffmpeg.stderr.on('data', (data)=>{
            console.log(`(Erro): ${data}`)
        })
        ffmpeg.on('close',(code)=>{
            resolve()
        })
    })

    return p
}

async function processa(){
    let v = videos.pop();

    if(v){
        try {
            await resize(v,'720')
            await resize(v,'480')
            await resize(v,'360')

            console.log(`${v} convertido com sucesso`);
            processa();
        } catch (error) {
            console.log(error)
        }
    }
}