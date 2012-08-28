/*
 * Object Date
 */
// set/getDate() 		:(Atribuye / Retorna dia y el mes 1 -31)
// getDay()         	:(Retorna dia de la semana 0- 6)
// set/getMonth()       :(Atribuye / Retorna el mes 0 - 11)
// set/getFullYear()    :(Atribuye / Retorna el año)
// set/getHours()       :(Atribuye / Retorna una hora 0 - 23)
// set/getMinutes()     :(Atribuye / Retorna una minutos 0 - 59)
// set/getSeconds()     :(Atribuye / Retorna una segundos 0 - 59)
// set/getTime()       	:(Atribuye / Retorna un numero de milisegundos desde 01/01/1970)e
/**
 * Ejemplos de Objeto Date()
 */


var fecha = new Date();
document.write(fecha);


/**
 * Adiciona dias o meses a una fecha actual
 */

const MES = 30 * 24 * 60 * 60 * 1000;
const DIA = 24 * 60 * 60 * 1000;
function adicionarFecha(fecha, constante, valor) {
	var resultado = data.getTime() + (valor * constante);
	return new Date(resultado);
}
var data = new Date(2012, 3, 20);
document.write("<br> " + data);
document.write("<br> " + adicionarFecha(data, MES, 2));
document.write("<br> " + adicionarFecha(data, DIA, -12));


/**
 * Calcula la diferencia entre dias y meses desde una fecha actual con una anterior
 */

function calcularIntervalo(data1, data2, constante) {
	return Math.abs(parseInt((data1.getTime() - data2.getTime()))/constante);
}
var data = new Date(2012, 3, 1);
var dataPosterior = new Date(2012, 1, 1);
document.write("<br> " + data);
document.write("<br> El intervalo de meses es: " + calcularIntervalo(data, dataPosterior, MES));
document.write("<br> El intervalo de dias es: " + calcularIntervalo(data, dataPosterior, DIA));


