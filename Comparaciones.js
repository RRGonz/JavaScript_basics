var x = 4;
var y = '4';

/*
*El doble igual "==" convierte ambas variables a un mismo tipo de dato para hacer la comparaciòn, es decir solo compara el valor
*En el siguiente ejemplo el resultado serìa true ya que ambas tiene el mismo valor y al ser convertidas al mismo tipo el resultado sera true
*/ 
console.log(x == y); 
/*
*El triple igual "===" compara si ambas variables tienen el mismo valor y ademàs si son del mismo tipo
*En el siguiente ejemplo el resultado serìa false pues aunque puede parecer que tienen el mismo valor, el tipo es diferente.
*/ 
console.log(x === y);


// Comparando Objetos

var rommel = {
    name: 'Rommel'
}

var otraPersona = {
    name: 'Rommel'
}

/*
 * Las comparaciones de objetos en JavaScript se hacen con respecto a las referencias es decir si un objeto no tiene de referencia con el que se quiere comparar 
 * la comparación será false sin importar si es "==" o "===" como en los siguientes ejemplos
 */
console.log(rommel == otraPersona);
console.log(rommel === otraPersona);

/*
* Cuando un objeto hace referencia a otro objeto y ambos se comparan en este caso el resultado sera true
*/

var otraPersona = rommel;

console.log(otraPersona == rommel);
console.log(otraPersona === rommel);


/*
* Cuando se desglosa la información de un objeto dentro de otro la comparación igual sera false pues solo estas tomando los valores, no haciendo referencia al otro objeto.
*/
var otraPersona = {
    ...rommel
}

console.log(otraPersona == rommel);
console.log(otraPersona === rommel);