//-------------------------------------------------------//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
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

//-------------------------------------------------------//
//-------------------------------------------------------//
//-------------------------------------------------------//
app.get('/', function(req, res) {
    console.log( "/"+ JSON.stringify(req.params) );
    res.render('index.html');
});

