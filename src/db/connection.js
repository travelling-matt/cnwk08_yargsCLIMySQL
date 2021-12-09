require("dotenv").config();
const { Sequelize } = require("sequelize"); //Sequelize is a class constructor and creates a new instance of a connection to database

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();

module.exports = sequelize;

// test by node src/db/connection.js