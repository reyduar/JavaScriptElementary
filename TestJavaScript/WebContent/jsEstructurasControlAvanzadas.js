/*
 * Estructuras de control avanzadas
 */
// For-in 			:(Utilizada para recorrer la propiedades de un objeto)
// while			:(Iterador que valida una condicion)
// do..while		:(Iterador que valida una condicion)
// switch			:(Seleccion de condiciones multiples)
// label			:(Utilizado para determinar un punto de retorno en un bloque)
/*
 * Ejemplo de For-in
 */
//for(p in window){
//	document.write("<br> Propiedad: "+p);
//	document.write("Valor: "+window[p]);
//}
/*
 * Ejemplo de while
 */
var i = 0;
while (i < 5) {
	document.write("<br> Valor de i: " + i);
	i++;
}
document.write("<br> Fin de while");

/*
 * Ejemplo de do...while
 */
var i = 5;
do {
	document.write("<br> Valor de i: " + i);
	i++;
} while (i < 5)// Imprime por lo menos una vez el resultado
document.write("<br> Fin de do... while");

/*
 * Ejemplo de switch
 */
var i = 5;
switch (i) {
case 1:
	document.write("<br> Dia 1: Domingo");
	break;
case 2:
	document.write("<br> Dia 2: Lunes");
	break;
case 3:
	document.write("<br> Dia 3: Martes");
	break;
case 4:
	document.write("<br> Dia 4: Miercoles");
	break;
case 5:
	document.write("<br> Dia 5: Jueves");
	break;
default:
	document.write("<br> En otros casos");
	break;
}
document.write("<br> Fin de switch...case..default");

/*
 * Ejemplo de label
 * Permite tener el control de los iteradores con la sentencia break...o...continue
 */
var i = 0;
var j = 0;
whileexterno: // Estos son los label
while (i < 5) {
	document.write("<br> While externo: "+i);
	whileinterno: // Estos son los label
	while (j < 5) {
		document.write("<br> While interno: "+j);
		if (i == j)
			break whileexterno;
		j++;
	}
	i++;
}
document.write("<br> Fin de while con ejemplo de Label");