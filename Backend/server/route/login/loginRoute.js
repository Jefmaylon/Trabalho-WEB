const express = require('express');
const router = express.Router();
const loginService = require('../../service/login/loginService');

router.post('/login', async (req, res) => {
   const login = req.body;
   const result = await loginService.saveLogin(login);
   console.log(result);
   if (result != "") {
      //res.json(result);
      res.status(200).json(result);
   } else {
      console.log("Não conectou");
      res.status(401).end();
   }
});

module.exports = router;
