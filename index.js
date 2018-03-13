var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');
var handle = {};
handle['/'] = requestHandler.start;
handle['/index.html'] = requestHandler.start;
handle['/favicon.ico'] = requestHandler.start;
server.start(router.router, handle);
