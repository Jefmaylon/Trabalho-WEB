const loginData = require('../../data/login/loginData');

exports.getLogin = (loginID) => {
    return loginData.getLogin(loginID);
}

exports.saveLogin = (login) => {
    return loginData.saveLogin(login);
}