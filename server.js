var http = require('http');
var url = require('url');

function start(route,handle) {
    http.createServer(function(req, res) {
        let pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " Received");
        let msg = route(pathname, handle);
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});
        res.write(msg);
        res.end();
    }).listen(8080);
    console.log("Server Started...");
}

exports.start = start;