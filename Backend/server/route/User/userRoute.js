const express = require('express');
const router = express.Router();
const userService = require('../../service/User/userService');

// Retorna todos os livros inseridos no banco de dados
router.get('/users', async function(req, res) {
    const users = await userService.getUsers();
    res.json(users);
});

// Retorna o livro por ID passado na URL
router.get('/user/:id', async function (req, res) {
    const user = await userService.getUser(req.params.id);
    res.json(user);
});

router.delete('/user/:id', async function (req, res) {
    const user = await userService.deleteUser(req.params.id);
    return res.json([{message: 'registro excluído com sucesso'}]);
});

router.post('/user', async function(req, res) {
    const user = req.body;
    const newUser = await userService.saveUser(user);
    res.json(newUser);
});

module.exports = router;