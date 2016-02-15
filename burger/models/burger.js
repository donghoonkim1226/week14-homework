var orm = require('../config/orm.js');

var burgers = {
	findAll: function(cb) {
	  orm.selectAll("burger", function(res){
	    cb(res);
	  });
	}
  addBurger: function(burgerName, cb){
    orm.addBurger("burger", burgerName, cb);
  },
  devourBurger: function(idInput, cb){
    orm.devourBurger("burger", idInput, cb);
  },
};
    
module.exports = burger;