function router(pathname, handle, response) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function')
    {
        return handle[pathname](response);
    }
    else {
        console.log('No Request Handler Found for ' + pathname);
        response.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});
        response.write("404, NOT FOUND");
        response.end();
    }
}
exports.router = router;