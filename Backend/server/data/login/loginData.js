const database = require("../../database/database");
var md5 = require('md5');

exports.getLogin = () => {
    return database.query('select * from usuario');
}

exports.saveLogin = (usuario) => {
    return database.query('select * from usuario where Email = $1 and Senha = $2', [usuario.Email, md5(usuario.Senha)]);
}
