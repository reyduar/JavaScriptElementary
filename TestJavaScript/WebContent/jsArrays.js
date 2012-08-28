/*
 * Arrays
 */
// Almacenamiento ordenado de un conjunto de valores u obejtos, accesibles por su
// indice. Arrays su indice se inicia siempre en 0

/*
 * Ejemplo de definicion de arrays
 */
var array = new Array("Lunes","Martes","Miercoles","Jueves");//Define un array


document.write("<br> La longuitud es: "+array.length);
array[4]="Viernes";
document.write("<br> La longuitud es: "+array.length);
for ( var int = 0; int < array.length; int++) {
	document.write("<br> Valor de posicion: ["+int+"] es "+array[int]);
}

var array2 = ["Enero","Febrero"]; //Otra forma de definir array
for ( var int = 0; int < array2.length; int++) {
	document.write("<br> Valor de posicion: ["+int+"] es "+array2[int]);
}


/*
 * Ejemplo de definicion de arrays paralelos
 */
var nombres=["Ariel","Ivan","Javier","Graciela","Jorge"];
var edades=[27,32,30,56,60];
delete edades[3]; //borra el elemento
for ( var i = 0; i < nombres.length; i++) {
	document.write("<br> - Nombe: "+nombres[i]+" su edad es: "+edades[i]);
}

/*
 * Ejemplo de arrays multidimensionales
 */
document.write("<br>---------------------------------------");
document.write("<br> Ejemplo de Arrays Multidimensionales");
var arrayPersonas = new Array();
arrayPersonas[0]=["Roger",80];
arrayPersonas[1]=["Miguel",26];
arrayPersonas[2]=["Cogote",40];
for ( var i = 0; i < arrayPersonas.length; i++) {
	document.write("<br> - Posicion: ["+i+"]: "+arrayPersonas[i][0]+" su edad es de "+arrayPersonas[i][1]);
}


/*
 * Ejemplo de arrays multidimensionales tipo HashMap
 */
document.write("<br>---------------------------------------");
document.write("<br> Ejemplo de Arrays HashMap");
var hashPersonas = [["Roger",80],["Miguel",26],["Cogote",40]];

for ( var i = 0; i < hashPersonas.length; i++) {
	hashPersonas[hashPersonas[i][0]]=hashPersonas[i];//Se crea el hashMap
}
document.write("<br>---------------------------------------");
do {
	var nombrePersona = prompt("Ingrese el nombre para la busqueda: ","Cogote");
	var persona = hashPersonas[nombrePersona];
	if(!persona)
		alert("Esta persona no fue regsitrada");
} while (!persona);
document.write("<br> Persona buscada: "+persona[0]+" su edad es de "+persona[1]+" años");
document.write("<br>---------------------------------------");