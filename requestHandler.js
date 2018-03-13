var fileprocesser = require('./fileHandler');
function start(absPath, response) {
    console.log('Request Handler start was called');
    fileprocesser.fileprocesser(absPath, response);
}




exports.start = start;