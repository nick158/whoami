var express = require('express');

var app = express();

app.get('/', function(req, res){
    //final response object
    var obj = {};
    //access the request headers language
    obj.lang = req.headers['accept-language'].split(',')[0];
    //ip address
    obj.ipaddress = req.headers['x-forwarded-for'];
    //find index of bracket 1 and 2, get everything in between which is OS platform
    var platform = "";
    var userAg = req.headers['user-agent'];
    var ind = userAg.indexOf('(');
    var ind2 = userAg.indexOf(')');
    obj.platform = userAg.substring(ind+1, ind2);
    //send by json
    res.json(obj);
    
    res.end();
    return;
});
app.listen(8080);