var express = require('express'),
    port = process.argv[2] || 9000;
    
var app = express();
app.use(express.static(__dirname + '/static'));
app.use(express.logger());
app.listen(port);
