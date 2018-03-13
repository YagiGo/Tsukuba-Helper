var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
//Create Server
function start(route) {

    http.createServer(function(req,res) {
    //Parse URL
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' Received');
    route(pathname);
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
        });
        return promise;
    };
    absPath = path.join(__dirname, pathname)
    sendFile(
        //TODO Different files(css, js, img...)
        absPath).then(
        function(data){
            console.log("Sending " + pathname);
            if(absPath.endsWith('.css'))
            {
                res.writeHead(200, {"Content-Type":"text/css; charset=utf8"});
                res.write(data);
                res.end();
            }
            else if(absPath.endsWith('.js'))
            {
                res.writeHead(200, {"Content-Type":"text/javascript; charset=utf8"});
                res.write(data);
                res.end();
            }
            else if(absPath.endsWith('.html'))
            {
                res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
                res.write(data);
                res.end();
            }
            else if(absPath.endsWith('.png'))
            {
                res.writeHead(200, {"Content-Type":"image/png"});
                res.write(data);
                res.end();
            }
            else if(absPath.endsWith('.jpg'))
            {
                res.writeHead(200, {"Content-Type":"image/jpg"});
                res.write(data);
                res.end();
            }
        },
        function(err) {
            console.error("FILE NOT FOUND!");
            res.writeHead(404, {"Content-Type":"text/html; charset=utf8"});
            res.write("404 NOT FOUND!" + err);
        });
}).listen(8080);
}
exports.start = start;
