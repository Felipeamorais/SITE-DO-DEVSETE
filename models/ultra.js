const db = require('../database/database');

class Ultra{
    constructor(id, distancia, tipo_vaga, estado){
        this.id = id;
        this.distancia = distancia;
        this.tipo_vaga = tipo_vaga;
        this.estado = estado;        
    }

    static async create(ultra, callback){
        db.abrirConexao();
        const sql = 'insert into ultra'+
        '(distancia, tipo_vaga, estado)'+
        'values(?, ?, ?)';

        const values = [
          ultra.distancia,
          ultra.tipo_vaga,
          ultra.estado  
        ];

        db.conexao.query(
            sql,
            values,
            (erro, results)=>{            
                if(erro){
                    callback(erro,null);
                } else {
                    callback(null,results.insertId)
                }
            }
        );
        db.fecharConexao();
    }
}

module.exports = Ultra;
