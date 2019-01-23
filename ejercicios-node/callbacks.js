console.log("Hola Mundo!!");

function primera(){
	setTimeout(function(){
		console.log(1);
	},5000);
}

function segunda(){
	console.log(2);
}

primera();
segunda();

function tarea(materia,callback){
	console.log(`Estoy haciendo mi tarea de ${materia}`);
	// console.log(materia);
	// console.log("Estoy haciendo mi tarea"+materia);
	callback();
}

function finalizar(){
	console.log("tarea finalizada");
}


tarea("Fisica",finalizar);
tarea("Matematicas",function(){
		console.log("Otraaaaa...");
	});
//finalizar();












