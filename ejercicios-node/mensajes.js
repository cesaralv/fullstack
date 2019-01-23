//module.exports = 'Hello world';
exports.curso = 'Fullstack';
exports.calificaciones={'Fisica':10,'Espanol':6};

materia='fisica';

function mostrar(msj){
	console.log(msj);
}

module.exports.log=mostrar;


function getMateria(){
	return materia;
}

module.exports.gM=getMateria;