// Dependencies
var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Burgers = sequelize.define('burgers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncredment: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  devoured: {
    type: Sequelize.STRING,
  }, {
    timestamps: false
  }
});


// Syncs with DB
  Burgers.sync();

module.exports = burger;