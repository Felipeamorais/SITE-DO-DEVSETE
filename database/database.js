const conexao = require('./connection');

function abrirConexao(){
    conexao.connect((erro)=>{
        if(erro){
            console.error(
            'Erro ao conectar ao banco'+
            ' de dados: '+erro.message
            );
        } else {
            console.log(
            'Conexão realizada com sucesso'
            );
        }
    });
}

function fecharConexao(){
    conexao.end((erro)=>{
        if(erro){
            console.error(
            'Erro ao fechar conexao:'+
            erro.message
            );
        } else {
            console.log(
            'Conexão com banco de dados'+
            ' encerrada.'
            );
        }
    });
}

module.exports = {
    abrirConexao,
    fecharConexao,
    conexao
}