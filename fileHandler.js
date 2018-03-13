var fs = require('fs');
function fileProcesser(filename, response) {
    var sendFile = function(path) {
        var promise = new Promise((resolve, reject) =>
        {
            fs.readFile(path, function(err, data) {
                if(err) {
                    reject(err);
                }
                else {resolve(data);}
            });
        });
        return promise;
    };
    sendFile(filename).then(
        function(data){
            console.log("Sending " + filename);
            if(filename.endsWith('.css'))
            {
                response.writeHead(200, {"Content-Type":"text/css; charset=utf8"});
                response.write(data);
                response.end();
            }
            else if(filename.endsWith('.js'))
            {
                response.writeHead(200, {"Content-Type":"text/javascript; charset=utf8"});
                response.write(data);
                response.end();
            }
            else if(filename.endsWith('.html'))
            {
                response.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
                response.write(data);
                response.end();
            }
            else if(filename.endsWith('.png'))
            {
                response.writeHead(200, {"Content-Type":"image/png"});
                response.write(data);
                response.end();
            }
            else if(filename.endsWith('.jpg'))
            {
                response.writeHead(200, {"Content-Type":"image/jpg"});
                response.write(data);
                response.end();
            }
        },
        function(err) {
            console.error("FILE NOT FOUND!");
            response.writeHead(404, {"Content-Type":"text/html; charset=utf8"});
            response.write("404 NOT FOUND!" + err);
        });
}
exports.fileprocesser = fileProcesser;