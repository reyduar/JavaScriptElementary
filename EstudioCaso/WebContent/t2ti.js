/**
 * @author miguel
 */
//http://www.medicine.tcd.ie/clinical_medicine/courses/msc_molecular_medicine/contact.php

function rolagem(elemento)
{
	var posicaoY = 0;
	if(elemento.offsetParent)
	{
		do
		{
			posicaoY += elemento.offsetTop;
			elemento = elemento.offsetParent;
		}while(elemento)
	}
	
	var tamanhoJanela = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
	var posicaoAtual = self.pageYOffset ? self.pageYOffset : document.documentElement.scrollTop;
	var posicaoFinal = posicaoY - (tamanhoJanela/4);
	while(posicaoAtual > posicaoFinal)
	{
		posicaoAtual -= 5;
		window.scroll(0, posicaoAtual);
	}
}

function formatarData(input)
{
	var data = input.value;
	if(data.length > 2 && data.indexOf("/") == -1)
		data = data.substring(0,2)+"/"+data.substring(2,data.length)
	if(data.length > 5 && data.indexOf("/",5) == -1)
		data = data.substring(0,5)+"/"+data.substring(5,data.length)
	input.value = data;
}


function validarData(input)
{
	var data = input.value.split("/");
	if(data.length < 3)
		return false;
	for(var i = 0; i < data.length; i++)
	{
		if(i==0 && (isNaN(data[i]) || data[i] < 1 || data[i] > 31))
			return false;
		if(i==1 && (isNaN(data[i]) || data[i] < 1 || data[i] > 12))
			return false;
		if(i==2 && (isNaN(data[i]) || data[i] < 1900 || data[i] > 2000))
			return false;
	}
	return true;	
}

function validarEmail(input)
{
	var email = input.value;
	if(!verificarTextoValido(email))
		return false;
	var indice = email.indexOf("@");
	if(indice > 2)
		return true;
	return false;
}

function verificarNumero(evt)
{
	evt = evt ? evt : window.event;
	var codigo = evt.which ? evt.which : evt.keyCode;
	var caractere = String.fromCharCode(codigo);
	if(isNaN(caractere) && codigo != 0 && codigo != 8)
		return false;
	return true;
}

function validarSexo(select)
{
	if(select.selectedIndex == 0)
		return false;
	return true;
}

function formatarNome(input)
{
	var nomes = input.value.split(" ");
	var resultado = "";
	for(var i = 0; i < nomes.length; i++)
	{
		if(nomes[i].length > 2)
			resultado += nomes[i].charAt(0).toUpperCase()+nomes[i].substr(1, nomes[i].length);
		else
			resultado += nomes[i];
		resultado += " ";
	}
	input.value = resultado;
}

function validarNome(input)
{
	var nomes = input.value.split(" ");
	var qtdNomes = 0;
	for(var i = 0; i < nomes.length; i++)
	{
		if(verificarTextoValido(nomes[i]))
			qtdNomes++;
		if(qtdNomes > 1)
			return true;
	}
	return false;
}

function verificarTextoValido(texto)
{
	if(texto.length < 1)
		return false;
	for(var i = 0; i < texto.length; i++)
	{
		var caractere = texto.charAt(i);
		if(caractere != " ")
			return true;
	}
	return false;
}
