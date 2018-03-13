function router(pathname, handle) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function')
    {
        return handle[pathname]();
    }
    else {
        console.log('No Request Handler Found for ' + pathname);
    }
}
exports.router = router;