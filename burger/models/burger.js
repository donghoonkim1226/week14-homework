var orm = require('../config/orm.js');

var burger = {
	findAllburger: function(cb) {
		orm.selectAll('burger', function(res){
			cb(res)
		});
	}
};
    
module.exports = burger;