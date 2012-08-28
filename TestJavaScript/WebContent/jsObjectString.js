/*
 * Object String
 */
// length        :(longuitud de la cadena)
// charAt()      :(retorna un caracter en una posicion especifica)
// concat()      :(concatena de dos cadenas y forma una nueva)
// indexOf()     :(retorna la primera posicion de un valor especificado y -1 si no fue localizado)
// lastIndexOf() :(retorna la ultima posicion de un valor especificado y -1 si no fue localizado)
// match()       :(permite buscar subcadenas y realizar sustituciones dentro de cadenas de texto con expresiones regulares)
// replace()     :(sustituye de acuerdo a una expresion regular una cadena de otra cadena)
// search()      :(busca por una expresion regular una cadena)
// slice()       :(extrae parte de una cadena)
// split()       :(separa una cadena en varias subcadenas)
// substr()      :(extrae parte de una cadena)

// substring()   :(extrae parte de una cadena)
// toLowerCase() :(convierte en minusculas)
// toUpperCase() :(convierte en mayusculas)

/**
 * Metodos HTML
 */
 // blink()	      :(retorna una cadena que parpadea <blink>)
 // fontcolor()   :(modifica el color de fuente <font color="color">)
 // fontsize()    :(modifica el tamaño de la fuente <font size="tamaño">)
 // italics()     :(coloca el texto en italico <i>)
 // bold()        :(coloca el texto en negrita <b>)

/**
 * Funcion para borrar los espacios en blancos con for...
 */
function eliminaEspaciosBlanco1(texto) {
	var resultado = "";
	var long = texto.length;
	for ( var i = 0; i < long; i++) {
		if(i < long && texto.substr(i,1)!=" "){
			resultado += texto.substr(i,1);
		}
		
	}
	return resultado;
}
var valor = prompt("Ingrese un texto: ","");
alert(eliminaEspaciosBlanco1(valor));


/**
 * Funcion para borrar los espacios en blancos con while...
 */
function eliminaEspaciosBlanco2(texto) {

	while (texto.indexOf(" ") != -1) {
		var parte1 = texto.substring(0,texto.indexOf(" "));
		var parte2 = texto.substring(texto.indexOf(" ")+1, texto.length);
		texto = parte1+parte2;
	}
	return texto;
}
var valor = prompt("Ingrese un texto: ","");
alert(eliminaEspaciosBlanco2(valor));


/**
 * Funcion que transforma numero a moneda
 */
function transformaNumeroMoneda(num) {
	var aux = num/100;
	aux = aux.toString().replace(".", ",");
	var parteEntera = aux.substring(0, aux.indexOf(","));
	if(aux.indexOf(",") == -1)
		parteEntera = 0;
	var parteFraccion = aux.substring(aux.indexOf(","), aux.length);
	parteFraccion = aux.indexOf(",") == -1 ? ",00" : parteFraccion.length <= 2? parteFraccion+"0" : parteFraccion;
	if(parteEntera.length < 4)
			return "$ "+parteEntera+parteFraccion ;
	var resultado ="";
	for(var i = parteEntera.length; i > 3;){
		resultado = "."+parteEntera.substring(i-3, i)+resultado;
		parteEntera = parteEntera.substring(0, i-3);
		i = i -3;
	}
	return parteEntera+resultado+parteFraccion;
}
var valor = prompt("Ingrese un numero: ","");
alert(transformaNumeroMoneda(valor));
