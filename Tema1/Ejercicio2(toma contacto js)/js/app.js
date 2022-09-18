'use strict'
function buscarLetra (){
    let dniCompleto = "21699477N";
    let dni = dniCompleto.substring(0,7);
    if(dniCompleto.length != 9 && isNaN(dni)){
        throw 'Formato de dni no es valido';
    }
    let letter = dniCompleto.charAt(8);
    let resto = dni%23;
    let calculatedLetter = numeroLetra(resto);
    console.log('Letra calculada: ' + calculatedLetter)
    if(letter === calculatedLetter){
        console.log("Hemos trinfado;")
    }else{
        console.log('Hemos fracasado');
    }
}

function numeroLetra(resto){
    const dniLtters = 'TRWAGMYFPDXBNJZSQVHLCKE'
    return dniLtters.charAt(resto);
}

try{
    buscarLetra();
}catch(err){
    console.log(err);
}
