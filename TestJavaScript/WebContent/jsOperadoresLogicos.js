/*
 * Operadores de Logicos
 */
 // && 			:(And)
 // ||			:(Or)
 // !			:(Not)

var x=10;
alert(x<=10 && x>5 && x<20); //Deberia de devolver verdadero
alert(x<=10 || x>5); //Deberia de devolver verdadero

/*
 * Funcion recibe un numero y verifica si es impar
 */
function impar(num){
	alert("Funcion impar: "+num);
	return (num%2!=0);
}

/*
 * Funcion recibe un numero y verifica si es par
 */
function par(num){
	alert("Funcion par: "+num);
	return (num%2==0);
}
alert(impar(5)&&par(4));
