var express = require('express');

var app = express();

app.get('/', function(req, res){
    var obj = {};
    obj.lang = req.headers['accept-language'].split(',')[0];
    obj.ipaddress = req.headers['x-forwarded-for'];
    console.log(obj);
});
app.listen(8080);