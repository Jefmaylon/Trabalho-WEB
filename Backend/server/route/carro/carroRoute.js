const express = require('express');
const router = express.Router();
const carroService = require('../../service/carro/carroService');

router.get('/carros', async function(req, res) {
    const carro = await carroService.getCarros();
    res.json(carro);
});


router.get('/carro/:id', async function (req, res) {
    const carro = await carroService.getCarro(req.params.id);
    res.json(carro);
});

router.delete('/carro/:id', async function (req, res) {
    const carro = await carroService.deleteCarros(req.params.id);
    return res.json([{message: 'registro excluído com sucesso'}]);
});

router.post('/carro', async function(req, res) {
    const carro = req.body;
    const newCarro = await carroService.saveCarro(carro);
    res.json(newCarro);
});

module.exports = router;