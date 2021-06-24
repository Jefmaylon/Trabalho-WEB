const database = require('../../database/database');

exports.getLogin = function (usuario, senha) {
    console.log(usuario, senha);
    return database.query('select * from usuario where "nome" = $1 and "senha" = $2', [usuario, senha]);
}