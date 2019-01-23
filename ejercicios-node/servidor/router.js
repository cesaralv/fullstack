function route(pathname,handle){
	console.log("A punto de realizar una peticion a "+pathname);
	if(typeof handle[pathname] === 'function'){
		return {'code':200,'body':handle[pathname]()};
	}else{
		console.log("No encontramos la ruta");
		return {'code':404,'body':'error'};
	}
}

exports.route=route;