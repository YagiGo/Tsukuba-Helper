var http = require('http');
var fs = require('fs');
var url = require('url');

//Create Server
http.createServer(function(req,res) {
    //Parse URL
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' Received');
    var sendFile = function(fileName) {
        var promise = new Promise((resolve, reject) => {
            fs.readFile(fileName, 'utf8', function(err,data) {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        })
    }
    sendFile(pathname.substring[1]).then(function(data){
        console.log("Sending " + pathname.substring[1])
        res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
        res.write(data.toString());
    },
        function(err) {
        console.error("FILE NOT FOUND!");
        res.writeHead(404, {"Content-Type":"text/html; charset=utf8"});
        });
}).listen(8080);