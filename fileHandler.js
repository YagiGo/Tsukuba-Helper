function fileProcesser(request, response) {
    var sendFile = function(path) {
        var promise = new Promise((resolve, reject) =>
        {
            fs.readFile(path, 'utf8', function(err, data) {
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
                res.writeHead(200, {"Content-Type":"text/css; charset=utf8"});
                res.write(data);
                res.end();
            }
            else if(filename.endsWith('.js'))
            {
                res.writeHead(200, {"Content-Type":"text/javascript; charset=utf8"});
                res.write(data);
                res.end();
            }
            else if(filename.endsWith('.html'))
            {
                res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
                res.write(data);
                res.end();
            }
            else if(filename.endsWith('.png'))
            {
                res.writeHead(200, {"Content-Type":"image/png"});
                res.write(data);
                res.end();
            }
            else if(filename.endsWith('.jpg'))
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
}
exports.fileprocesser = fileProcesser;