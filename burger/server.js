var express = require('express');
var app = express();
var expressHandleBars = require("express-handlebars");
var connect = require('connect');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', expressHandleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

var port = 8080;
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});