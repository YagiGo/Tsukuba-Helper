var path = require('path');
var fileprocesser = require('./fileHandler');
function router(pathname, handle, response) {
    console.log("About to route a request for " + pathname);
    let absPath = path.join(__dirname, pathname);
    if(typeof handle[pathname] === 'function')
    {
        handle[pathname](absPath, response);
    }
    else {
        console.log('No Request Handler Found for ' + pathname);
        fileprocesser.fileprocesser(pathname, response);
    }
}
exports.router = router;