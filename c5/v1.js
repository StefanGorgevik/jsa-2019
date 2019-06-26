var http = require('http');

var server = http.createServer(function(req,res) {
    console.log(req);
    res.write("Method: " + req.method + ", " + " URL: " + req.url);
    res.end();
});

server.listen(8080, (err) =>{
    if(err) {
        console.log(err);
    }
    console.log("Server started successfully!");
});


//https://jsonplaceholder.typicode.com/