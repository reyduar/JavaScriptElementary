/*Asi se declara variable global*/
var numero = 3;
/* Asi se declara constantes */
const numero_conts = 100;
function test1() {
	var numero = 50; // Se definio nuevamente una variable global numero deberia de imprimir 50
	alert(numero);
	alert(numero_conts); //deberia de imprimir el valor 100
}
test1();
alert(numero);//deberia de imprimir el valor global 3