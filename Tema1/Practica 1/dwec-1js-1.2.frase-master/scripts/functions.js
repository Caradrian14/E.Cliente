'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	return cadena.split(" ").length;
}

function maysc(cadena) {
	return cadena.toUpperCase();
}

function titulo2(cadena) {
	let palabrasSeparadas = cadena.split(" ");
	for(let i=0; i<palabrasSeparadas.length; i++){
		palabrasSeparadas[i] = palabrasSeparadas[i][0].toUpperCase() + palabrasSeparadas[i].substr(1);
	}
	return palabrasSeparadas.join(" ");
}

function titulo(cadena) {
	let cadenaSeparada = cadena.split(" ");
	var palabras =  cadenaSeparada.map(function(palabra){
		palabra = palabra[0].toUpperCase() + palabra.substr(1);
		return palabra;
		
	})
	return palabras.join(" ");
}

function letrasReves(cadena) {
	let cadenaDividida = cadena.split('');
	let cadenaReverse = cadenaDividida.reverse();
	return cadenaReverse.join(''); 
}

function palabrasReves(cadena) {
	var cadenaSeparada = cadena.split(" ");
	return cadenaSeparada.reverse().join(" "); 
}

function palindromo(cadena) {
	var length = cadena.length;
	for(let i = 0; i < length / 2; i++){
		if(cadena[i] !== cadena[length - 1 - i]){
			return false;
		}
	}
	return true;
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}