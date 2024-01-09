const http = require('http');
const ultraController = require('./controllers/ultra_controller');

const server = http.createServer(
    async (req, res)=>{
        //configurar os cabeçalhos
        //cors
        //permitir todas as origens
        res.setHeader('Access-Control-Allow-Origin','*');
        //Especificar os métodos de acesso (verbos)
        res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
        //Cabeçalhos permitidos
        res.setHeader('Access-Control-Allow-Headers','Content-Type');
        //Definir autenticação com credencial
        res.setHeader('Access-Control-Allow-Credentials','true');

        //Verificação se a solicitação é uma
        //solicitação de opções e responder
        //de forma adequada
        if(req.method === 'OPTIONS'){
            //req ok, mas no content
            //sem conteúdo
            res.statusCode = 204;
            res.end();
            return;
        }

        //definir as rotas da API
        if(
            req.method === 'POST' && 
            req.url === '/ultra/cadastro'
        ){
            //salvar no banco
            let body = "";
            for await (const chunk of req){
                body += chunk;
            }
            //efetuar o parse
            const objBody = JSON.parse(body);

            const result = await ultraController.criarNovoUltra(
                objBody.distancia,
                objBody.tipo_vaga,
                objBody.estado
            )

            res
            .writeHead(200, "OK", {'Content-Type' : 'application/json'})
            .end(JSON.stringify({mensagem : "Cadastro realizado com sucesso"}));

        } else if(
            req.method === 'DELETE' && 
            req.url === '/ultra/apagar'
        ){
        } else {
            res
            .writeHead(404,'Not Found',{'Content-Type' : 'application/json'})
            .end('Página não encontrada');
        }
    }
);

server.listen(3000, ()=>{
    console.log('Servidor Executando na porta 3000');
});