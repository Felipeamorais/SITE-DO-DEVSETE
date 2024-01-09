//importação do mysql para o projeto

const banco = require('mysql2');

// configuração da conexão
const conn = banco.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sensor_iot'
});

module.exports = conn;