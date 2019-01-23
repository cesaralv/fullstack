var http = require("http");
var url = require("url");

// http.createServer(function(request,response){
// 	console.log("Peticion recibida");
// 	var path=url.parse(request.url).pathname;
// 	console.log(path);

// 	if(path == '/inicio'){
// 		response.writeHead(200,{"Content-Type":"text/html"});
// 		response.write("Hola!!")
// 	}else if(path == '/error'){
// 		response.writeHead(404,{"Content-Type":"text/html"});
// 		response.write("error")
// 	}else{
// 		response.writeHead(404,{"Content-Type":"text/html"});
// 	}
// 	response.writeHead(200,{"Content-Type":"text/html"});
// 	response.write("Hola mundo Proteco");
// 	response.end();
// }).listen(8888);

//console.log("Server iniciado");


function iniciar(route, handle){
	function onRequest(request, response){
		console.log("Peticion recibida");
		var path=url.parse(request.url).pathname;
		var res=route(path,handle);
		response.writeHead(res.code,{"Content-Type":"text/html"});
		response.write(res.body);
		response.end();
	}
	http.createServer(onRequest).listen(8080);
	console.log("Servidor iniciado");
}

exports.iniciar=iniciar;












