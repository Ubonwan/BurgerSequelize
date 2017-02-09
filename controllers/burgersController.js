// Model
var Burgers = require('../models/burger.js')
var path = require('path');

// Routes
module.exports = function(app) {
  // Get burgers
  app.get('/api/burgers' function(req, res) {
    Burgers.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.post('/api/burgers', function(req, res) {
    Burgers.create.then(function(results){
      res.json(results);
    });
  });

  app.put('/api/burgers', function(req, res) {
    Burgers.update({}).then(function(results) {
      res.json(results);
    });
  });
};

