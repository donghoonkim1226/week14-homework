var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//get route -> index
router.get('/index', function(req,res) {
	burger.findAllthings(function(data){
		res.render('index', {data});
	});
});

module.exports = router;