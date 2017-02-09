// Dependencies
var Sequelize = require('sequelize');

// Create mySQL connection using Sequelize
var sequelize = new Sequelize('burgers_db', 'root', 'Shellie01' {
	host: 'localhost',
	dialect: 'mysql'
});

// Exporting the connection
module.exports = connection;