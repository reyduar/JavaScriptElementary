/*
 * Operadores de Especiales
 */
 // condicion ? valor:valor 	:(Operador ternario)
 // ,							:(Resuelve dos o mas operando y retorna uno mas a la derecha)
 // delete						:(Apaga un objeto, propiedad de un elemento en un array)
 // in							:(Verifica si una pripiedad existe o no en un objeto)
 // instanceof					:(Verifica si un objeto es de un determnado tipo)
 // new						    :(crea una instancia de un determnado tipo)
 // this					    :(se utiliza para hacer referencia a un obejto actual)
 // typeof						:(se utiliza para saber el tipo de dato)
 // void						:(resuelve una expresion que no retorna nada)


/*
 * Ejemplo de Operador Ternario
 * */
var resultado;
var num = 7;
resultado = num<5 ? "El numero es menor que 5":"Numero mayor que 5";
alert(resultado);
resultado = num<5 ? "El numero es menor que 5" : num<=7 ? "El numero es menor o igual a 7" : "Numero es mayor que 7";
alert(resultado);

/*
 * Ejemplo de Operador coma(,)
 * */
var resultado;
var num = 7;
function awesomeness() {
	alert("fuking awesome...");
}
resultado =(num++,num++,awesomeness(),num);
alert(resultado);

/*
 * Ejemplo de Operador delete, new, in, typeof
 * */
var num = 7;
cuadrado = new Number(5);//Se crea un objeto de tipo numero con un valor 5
cuadrado.altura = 7.5;
alert(typeof cuadrado); //Retorna el tipo de variable
alert("¿Posee atributo altura?: "+("altura" in cuadrado));
alert("El valor del atributo altura es: "+cuadrado.altura);
alert("Removiendo el atributo "+ delete cuadrado.altura);
alert("¿Existe todavia el atributo altura?: " +("altura" in cuadrado));




