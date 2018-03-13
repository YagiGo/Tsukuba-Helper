var fileprocesser = require('./fileHandler');
function start(request, response) {
    console.log('Request Handler start was called');
    response.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});
    response.write("Server Works!");
    response.end();
}




exports.start = start;