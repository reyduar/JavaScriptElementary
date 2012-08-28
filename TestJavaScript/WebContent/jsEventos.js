/*
 * Eventos de JavaScript
 */
// onclick 			:(Ocurre el usuario hace clic en un objeto)
// ondbclick 		:(Ocurre el usuario hace doble clic en un objeto)
// onkeydown 		:(Ocurre cuando una tecla es presionada)
// onkeyup 			:(Ocurre cuando una tecla es soltada)
// onkeypress 		:(Ocurre cuando una tecla fue presionada)
// onmousedown 		:(Ocurre cuando un usuario presiona el boton del mouse)
// onmouseup 		:(Ocurre cuando un usuario libera el boton del mouse)
// onmouseover		:(Ocurre cuando el mouse es movido sobre un elemento)
// onmouseout		:(Ocurre cuando el mouse es movido fuera de un elemento)
// onmousemove 		:(Ocurre cuando el mouse es movido sobre un elemento)

// onchange 		:(Ocurre cuando el usuario muda el contenido de un campo o un elemento pierde el foco)
// onselect 		:(Ocurre cuando el texto es seleccionado)
// onfocus 			:(Ocurre cuando el elemento obtiene el foco)
// onblur 			:(Ocurre cuando el elemento pierde el foco)
// onsubmit 		:(Ocurre cuando el boton submit es clicado)
// onreset 			:(Ocurre cuando el boton de reset es clicado)

// onload 			:(Ocurre cuando la pagina o imagen termina de cargar)
// onunload 		:(Ocurre cuando el usuario dale de la pagina)
// onresize 		:(Ocurre cuando el frame es redimensionado)
// onerror 			:(Ocurre cuando acontese un error en una imagen o documento)


/**
 * Ejemplo modifica titulo de la pagina
 */
function modificaTitulo() {
	document.title = document.getElementById("texto").value;
}

/**
 * Valida si un email tiene @
 */
function validaEmail() {
	var email = document.getElementById("texto").value;
	if (email.indexOf("@") < 0) {
		alert("El email no es valido");
		document.getElementById("texto").value = "";
	} else {
		alert("El email esta perfecto");
	}
}

/**
 * Ejemplo de evento onkeypress
 */
function validarNumeros(evt) {
	var codigo = evt.which;
	alert("Tecla: " + String.fromCharCode(codigo) + " Char code:" + codigo);
	// document.write("<br> Tecla: "+String.fromCharCode(codigo))
	var num = parseInt(String.fromCharCode(codigo));
	if (isNaN(num)) {
		return false;
	} else {
		return true;
	}
}

/**
 * Ejemplo de evento onkeydown
 */
function validarNumeros2(evt) {
	// Para que funcione IExplorer se valida el evt
	evt = evt ? evt : window.event;
	var codigo = evt.keyCode ? evt.keyCode : evt.which;// Este coido solo
														// funciona en Firefox y
														// IExp
	// var codigo = evt.which;//Este codigo solo funciona en Firefox
	alert("Tecla: " + String.fromCharCode(codigo) + " Char code:" + codigo);

	var num = parseInt(String.fromCharCode(codigo));
	if (isNaN(num)) {
		var texto = document.getElementById("textodown").value;
		for ( var i = 0; i < texto.length; i++) {
			var aux = parseInt(texto.substr(i, 1));
			if (isNaN(aux)) {
				texto = texto.substring(0, i)
						+ texto.substring(i + 1, texto.length);
				document.getElementById("textodown").value = texto;

			}
		}
	}
}

/**
 * Ejemplo modifica titulo de la pagina
 */
 var contador = 0;
function sustituirImagen() {
	var imagenes = ["img2.jpg","img1.jpg","globant.jpg"];
	contador = ++contador > 2 ? 0 : contador;
	return imagenes[contador];
}

/**
 * Ejemplo para mostrar Menu Dinamico
 */
function mostrarMenu(idMenuDinamico) {
	var menuDinamico = document.getElementById(idMenuDinamico);
	menuDinamico.style.display = "block";
	var imagenes = document.images;
	for(var i = 0; i < imagenes.length; i++){
		if(imagenes[i].id+"Dinamico" != idMenuDinamico)
		ocultarMenu(imagenes[i].id+"Dinamico");
	}
} 

/**
 * Ejemplo para mostrar Menu Dinamico
 */
function ocultarMenu(idMenuDinamico) {
	var menuDinamico = document.getElementById(idMenuDinamico);
	menuDinamico.style.display = "none";
}

/**
 * Ejemplo para dar formato a la caja de texto de nombre
 */
function formatoProper(elemento) {
	var nombreArray = elemento.value.split(" ");
	var resultado = "";
	for(var i=0; i<nombreArray.length; i++){
		if(nombreArray[i].length > 1){
			resultado +=nombreArray[i].substr(0,1).toUpperCase()+nombreArray[i].substring(1, nombreArray[i].length);
		}else{
			resultado +=nombreArray[i] ;
		}
		resultado +=" ";
	}
	elemento.value = resultado;
}

/**
 * Ejemplo para rezaltar campo de texo
 */
function rezaltarCampo(elemento) {
	elemento.style.backgroundColor = "red";
}

/**
 * Ejemplo para validar los inputs
 */
function validarForm() {
	var inputs = document.getElementsByTagName("input");
	var resultado = true;
	for(var i=0; i<inputs.length; i++){
			if(inputs[i].value == null || inputs[i].value == ""){
				rezaltarCampo(inputs[i]);
				resultado = false;
			}
	}
	if(!resultado)
		alert("Ingrese los campos que faltan porfavor!");
	return resultado;
}

/**
 * Ejemplo para sustituir imagenes
 */
function sustituirImagenes(elemento) {
//	alert("Se sustituyo la imagen: "+elemento.src.subestring(elemento.src.lastIndexOf("/")+1,elemento.src.length))
	var imagenes = ["img3.jpg","globant.jpg"];
	for(var i=0; i<imagenes.length; i++){
		if(imagenes[i] != elemento.src){
			elemento.src = imagenes[i];
			break;				
		}
	}
}

/**
 * Ejemplo de redimensiones la altura
 */
function verificarAlturaMonitor() {
	
	if(screen.width > window.innerWidth){
		window.innerWidth = screen.width;
	}
}