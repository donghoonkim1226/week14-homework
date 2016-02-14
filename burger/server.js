var express = require('express');
var app = express();
var expressHandleBars = require("express-handlebars");
var connect = require('connect');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.engine('handlebars', expressHandleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});