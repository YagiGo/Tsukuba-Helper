var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');
var handle = {};
handle['functionpages/index.html'] = requestHandler.start;
handle['functionpages/favicon.ico'] = requestHandler.start;
server.start(router.router, handle);
