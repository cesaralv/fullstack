var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.iniciar;
handle['/iniciar'] = requestHandlers.iniciar;
handle['/salir'] = requestHandlers.salir;
handle['/comer'] = requestHandlers.comer;

server.iniciar(router.route,handle);