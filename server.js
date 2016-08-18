var express = require('express');

var app = express();
app.set("port", (process.ENV.PORT || 5000));

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
    //send by jsonnode
    res.json(obj);
    
    res.end();
    return;
});
app.listen(app.get('port'), function(){
    console.log("App now listening on port", app.get('port'));
});