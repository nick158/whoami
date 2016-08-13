var express = require('express');

var app = express();

app.get('/', function(req, res){
    var obj = {};
    obj.lang = req.headers['accept-language'].split(',')[0];
    obj.ipaddress = req.headers['x-forwarded-for'];
    var platform = "";
    var userAg = req.headers['user-agent'];
    var ind = userAg.indexOf('(');
    var ind2 = userAg.indexOf(')');
    obj.platform = userAg.substring(ind+1, ind2);
    res.json(obj);
    
    res.end();
    return;
});
app.listen(8080);