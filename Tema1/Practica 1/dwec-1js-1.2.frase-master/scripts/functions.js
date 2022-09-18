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
	return cadena == cadena.split('').reverse().join('');
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