module.exports=function(nombre, apellidos){
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.miNombre = function(){
		return this.nombre+' '+this.apellidos;
	}
}