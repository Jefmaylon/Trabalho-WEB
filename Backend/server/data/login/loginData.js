const database = require("../../database/database");
var md5 = require('md5');

exports.getLogin = () => {
    return database.query('select * from usuario');
}

exports.saveLogin = (usuario) => {
    console.log(usuario.Email, md5(usuario.Senha));
    return database.query('select * from usuario where email = $1 and senha = $2', [usuario.Email, md5(usuario.Senha)]);
}
