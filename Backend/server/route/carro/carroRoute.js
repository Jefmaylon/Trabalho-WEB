const express = require('express');
const router = express.Router();
const carroService = require('../../service/carro/carroService');

router.get('/carros', async function(req, res) {
    const carroID = await carroService.getCarros();
    res.json(carroID);
});


router.get('/carro/:id', async function (req, res) {
    const carroID = await carroService.getCarro(req.params.id);
    res.json(carroID);
});

router.delete('/carro/:id', async function (req, res) {
    const carro = await carroService.deleteCarros(req.params.id);
    return res.json([{message: 'registro excluído com sucesso'}]);
});

router.post('/carros', async function(req, res) {
    const carro = req.body;
    const newCarro = await carroService.saveCarro(carro);
    res.json(newCarro);
});

module.exports = router;