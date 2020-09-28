var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}


const esAltaOne = (persona) => {
    return persona.altura > 1.8
}

// arrow functio una sola linea
const esAlta = (persona) => persona.altura > 1.8;

// Es lo mismo pero desglosamos la altura
const esAltaDesglosado = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => !esAltaDesglosado({altura});


var personas = [sacha, alan, martin, dario, vicky, paula];
 


// Accediendo a los  valores de un arreglo
console.log(personas[0].altura); 
console.log(personas[0]['altura']); 
// iteración de un array
for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}`);
}

// Filtrando por personas altas 
var personasAltas = personas.filter(esAlta);

// Reto Filtrado personas bajas
var personasBajas = personas.filter(esBaja);

// Filtramos la altura creando la función directo en el filter
var personasAltasTwo = personas.filter(function (persona) {
    return persona.altura > 1.8
});


console.log(personasAltas);

console.log(personasBajas);


// transformar un array
const pasarAlturaACms = persona => {
    // persona.altura = persona.altura * 100;
    return {
        ...persona,
        altura:  persona.altura *= 100
    };
}

const pasarAlturaACmsDesglosado = persona => ({
        ...persona,
        altura:  persona.altura *= 100
});


var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);


// Reducir un array a un valor
const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros;
}

// Es lo mismo que la funcion de arriba
const reducerA = (acum, {cantidadDeLibros}) =>  acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer,0);

console.log(totalDeLibros);