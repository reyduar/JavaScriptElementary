/*
 * Prompt y confirmaciones
 */
// confirm() :(Ofrece la posibilidad de responder positiva o negativamente (si/no) una pregunta)
// prompt() :(Ofrece la posibilidad de responder preguntas discursivamente)
/*
 * Ejemplo de confirm()
 */
if (confirm("¿Desea ejecutar esta opción?")) {
	alert("Respondio afirmativamente");
} else {
	alert("Respondio negativamente");
}
/*
 * Ejemplo de prompt()
 */
function rellenar(num) {
	for ( var i = 0; i < num; ) {
		i++;
		document.write("<br>  Linea: "+i);
	}
}
var respuesta = prompt("Ingrese cuantas lineas desea: ", "10");
alert("La respuesta es: "+respuesta);
rellenar(respuesta);