const database = require('../../database/database');
var md5 = require('md5');

exports.getUsers = function () {
    return database.query('select * from usuario');
}

exports.getUser = function (UserID) {
    return database.query('select * from usuario where "id" = $1', [UserID]);
}

exports.deleteUser = function (UserID) {
    return database.none('delete from usuario where "id" = $1', [UserID]);
}

exports.saveUser = function(User) {
    return database.one('insert into usuario (nome, email, senha, telefone) values ($1, $2, $3, $4) returning *',
    [User.Nome, User.Email, md5(User.Senha), User.Telefone]);
}



