var connect = require ('connect');
var http = require ('http');

var app = connect();
console.log("Our Connect server is running");

function helloWorld(req,res,next){
    res.setHeader('Content-type','text/plain');
    res.end('Hello World');
}

function byeWorld (req,res,next){
    res.setHeader('Content-type','text/plain');
    res.end('Bye world');
}

app.use('/hello',helloWorld);
app.use('/bye', byeWorld);

app.listen(3000);
