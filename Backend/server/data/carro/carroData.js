const database = require('../../database/database');

exports.getCarros = function () {
    return database.query('select * from carros');
}

exports.getCarro = function (carroID) {
    return database.query('select * from carros where "id" = $1', [carroID]);
}

exports.deleteCarro = function (carroID) {
    return database.none('delete from carros where "id" = $1', [carroID]);
}

exports.saveCarro = function(book) {
    return database.one('insert into Books (id, marca, modelo, ano, qtdlugares, cor) values ($1, $2, $3, $4, $5, $6) returning *',
    [carro.id, carro.marca, carro.modelo, carro.ano, carro.qtdlugares, carro.cor]);
}



