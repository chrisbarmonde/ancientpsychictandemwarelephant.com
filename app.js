var morgan = require('morgan');
var express = require('express');
var port = 9000;
    
var app = express();
app.use(express.static(__dirname + '/static'));
app.use(morgan());
app.listen(port);
