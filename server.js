var http = require('http');
var url = require('url');
var path = require('path');

function start(route,handle) {
    http.createServer(function(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " Received");
        let absPath = path.join(__dirname, pathname);
        route(absPath, handle, response);
        /*
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});
        res.write(msg);
        res.end();
        */
    }).listen(8080);
    console.log("Server Started...");
}

exports.start = start;