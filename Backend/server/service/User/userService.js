const userData = require('../../data/User/userData');

exports.getUsers = function() {
    return userData.getUsers();
}

exports.getUser = function(UserID) {
    return userData.getUser(UserID);
}

exports.deleteUser = function(UserID) {
    return userData.deleteUser(UserID);
}

exports.saveUser = function (User) {
    return userData.saveUser(User);
}
