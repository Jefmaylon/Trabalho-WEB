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

exports.saveCarro = function(carro) {
    return database.one('insert into carros (marca, modelo, ano, qtdlugares, cor, imagem) values ($1, $2, $3, $4, $5, $6) returning *',
    [carro.Marca, carro.Modelo, carro.Ano, carro.Qtdlugares, carro.Cor, carro.Imagem]);
}



