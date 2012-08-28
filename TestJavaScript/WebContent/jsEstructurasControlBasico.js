/*
 * Estructuras de control basicos
 */
// if / if...else 			:(Expresion condicional)
// for						:(Iterador)
// break					:(Sale de iterador)
// continue				:(Avanza a la proxima iteracion)
/*
 * Ejemplo de if..else if..else
 * */
var i = 8;

if (i < 9) {
	alert("Es menor a 9");
} else if (i != 8) {
	alert("Es distinto a 8");
} else {
	alert("No es mayor 9 y no es distinto a 8");
}

/*
 * Ejemplo de for..break..continue
 */
for ( var i = 0; i < 3; i++) {
	if (i > 1) {
		break; //Sale de la iteracion cuando es mayor de 1
	}
	alert("Valor de para i: " + i);
}
alert("Salio de la iteracion");


for ( var i = 0; i < 3; i++) {
	if (i == 1) {
		continue; //Cuando se igual a 1 el no ejecutara lo nada dentro del iterador..
	}
	alert("Valor de para i: " + i);
}
alert("Fin de la iteracion");