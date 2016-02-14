var connection = require('../config/connection.js');

var orm = {
  selectAll: function(tableInput, cb) {
    var s = 'SELECT * FROM ' + tableInput + ';';
    connection.query(s, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  addBurger: function(burgerName, cb) {
  	var a = 'INSERT INTO burger (burger_name) ' + burgerName + ';';
  	connection.query(a, function(err, result) {
  		if (err) throw err;
  		cb(result);
  	});
  }
};
    
module.exports = orm;