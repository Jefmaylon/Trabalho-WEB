const carroData = require('../../data/carro/carroData');

exports.getCarros = function() {
    return carroData.getCarros();
}


exports.getCarro = function(carroID) {
    return carroData.getCarro(carroID);
}

exports.deleteCarro = function(carroID) {
    return carroData.deleteCarro(carroID);
}

exports.saveCarro = function (carro) {
    return carroData.saveCarro(carro);
}


