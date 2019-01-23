function iniciar(){
	console.log("El manejador iniciar ha sido llamado");
	return "iniciar";
}
function salir(){
	console.log("El manejador salir ha sido llamado");
	return "salir";
}
function comer(){
	console.log("El manejador salir ha sido llamado");
	return "comiendo";
}


exports.iniciar=iniciar;
exports.salir=salir;
exports.comer=comer;