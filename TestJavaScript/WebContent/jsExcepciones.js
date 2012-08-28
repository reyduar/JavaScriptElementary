/*
 * Excepciones 
 */
// Se utiliza para tratar situaciones inesperadas y crear mensajes
// que auxilien al usuario a utilizar el programa

/*
 * Ejemplo Excepciones
 */
function division100(num) {
	try {
		var valor = Number(num);
		if(isNaN(valor))
			throw "Valor invalido";
		return num/100;
	} catch (e) {
		alert(e);
		return null;
	}finally{
		alert("Bloque final");
	}
}
var valor = prompt("Ingrese valor a dividir: "+"");
alert("El resultado es: "+division100(valor));