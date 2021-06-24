const sequelize = require('sequelize');
const confug = require('./config/database');

const connection = new sequelize(config);

module.exports = connection;