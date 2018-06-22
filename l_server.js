//-------------------------------------------------------//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dns = require("dns");

//-------------------------------------------------------//
app.set('view cache',true)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/html'));
//-------------------------------------------------------//
var port = process.env.PORT || 80;
var server = app.listen(port, function(){
    console.log("Live Video Chat Server has started on port " + port);
});

validate = function(param) {
    if (  !param || param === '' ) {
        return false;
    }
    return true;
}

isEmpty = function(obj) { 
    for (var x in obj) { return false; }
    return true;
}

var server_ip = ""
var aone = dns.lookup('www.aone.one',function( error,addresses,family) {
    console.log( addresses )
    server_ip = addresses
})

//-------------------------------------------------------//
//-------------------------------------------------------//
//-------------------------------------------------------//
app.get('/', function(req, res) {
    console.log( "/"+ JSON.stringify(req.params) );

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'+ server_ip);
    res.end();

    // res.render('index.html');
    
});

