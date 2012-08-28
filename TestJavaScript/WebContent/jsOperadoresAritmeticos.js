/*
 * Operadores aritmeticos basicos
 */
 // +; -; *; /; :(Adicion, subtraccion, multiplicacion, division)
 // % 			:(Resto de division)
 // ++ 			:(Incremento)
 // -- 			:(Decremento)
 // - 			:(Negacion)
 
/*
 * Operadores aritmeticos abreviados
 */
 // += 			:(suma de operando izquierdo a derecho)
 // -=			:(resta de operando izquierdo a derecho)
 // *=			:(multiplica operando izquierdo a derecho)
 // %=			:(divide el operando de la izquierda por la derecha y almacenar el resto de la división)

//var x=10;
//var y;
//
//y=x;
//
//y++;
//alert(y); //Deberia de mostrar 11
//
//y--
//alert(y); //Deberia de mostrar 10

//var x=10;
//var y;
//y=x++;
//document.write("Y:"+y+"X:"+x); //Deberia de mostrar para y:10 y para x:11 

var x=10;
var y;
y=x++ + 5;
document.write("Y:"+y+"X:"+x); //Deberia de mostrar para y:15 y para x:11

var x=10;
var y;
y=++x + 5;
document.write("\n Y:"+y+"X:"+x); //Deberia de mostrar para y:16 y para x:11

var x=10;
x+=5;
document.write("\n X:"+x); //Deberia de mostrar para x:15

var x=10;
x-=5;
document.write("\n X:"+x); //Deberia de mostrar para x:5

var x=10;
x/=5;
document.write("\n X:"+x); //Deberia de mostrar para x:2

var x=10;
x*=5;
document.write("\n X:"+x); //Deberia de mostrar para x:50

