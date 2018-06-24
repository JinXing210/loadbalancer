var Hapi = require('hapi');

var port = 80;
var server = new Hapi.Server({ port: port })
await server.start();    

var d = new Date();
console.log( d.getTime());
    //----------------------------------------------------------------------//
server.route({method:'GET',path:'/',handler: (req,res) => { 
    console.log( "index.html/"+JSON.stringify(req.params) );
    return { success:true,data: {
        stun_server: {
            url:"stun:52.23.226.85:3478",
            username:"",
            password:""
        },
        turn_server:{
            url:"turn:52.23.226.85:3478",
            username:"admin",
            password:"admin"
        }
    }
    };
}});

return;
//-------------------------------------------------------//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dns = require("dns");

//-------------------------------------------------------//
app.set('view cache',true)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//app.use(express.static(__dirname + '/html'));
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

dns.lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);
    server_ip = add
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

