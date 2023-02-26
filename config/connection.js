const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_URI)



module.exports = sequelize;
