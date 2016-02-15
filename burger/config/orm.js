var connection = require('../config/connection.js');

var orm = {
  selectAll: function(tableInput, cb) {
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(s, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  addBurger: function(tableInput, burgerName, cb) {
    var query = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
    connection.query(query, [burgerName], function(err, result) {
      if (err) throw err;
      cb(result);
  	});
  },
  devourerBurger: function(tableInput, idInput, cb) {
    var query = "UPDATE " + tableInput + " SET devoured = 1  WHERE id = ?";
    connection.query(query, [idInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};
    
module.exports = orm;