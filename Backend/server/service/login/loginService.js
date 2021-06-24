const loginData = require('../../data/login/loginData');

exports.getLogin = async function(usuario, senha) {
    return await loginData.getLogin(usuario, senha);
}
