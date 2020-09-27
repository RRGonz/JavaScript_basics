// This is an object
var rommel = {
    //Key      //Value
    firstName: 'Rommel',
    lastName: 'Gonzalez',
    age: 28,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(person) {
    console.log(`${person.firstName} ${person.lastName} es:`);

    if (person.ingeniero) {
        console.log('Ingeniero');
    }
    if (person.cocinero) {
        console.log('Cocinero');
    }
    if (person.cantante) {
        console.log('Cantante');
    } else {
        console.log('No es Cantante');
    }
    if (person.dj) {
        console.log('Dj');
    }
    if (person.guitarrista) {
        console.log('Guitarrista');
    }
    if (person.drone) {
        console.log('Piloto de Drone');
    }
}

// Las constantes son valores que no cambian en la ejecución del programa, por convención es bueno ponerlas en mayusculas
const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(person) {
    return person.age >= MAYORIA_DE_EDAD;
}

// Reto  saber si una persona es mayor de edad
function mayorDeEdad(person) {
    if (esMayorDeEdad(person)) {
        console.log(`${person.firstName} ${person.lastName} es mayor de edad`);
    } else {
        console.log(`${person.firstName} ${person.lastName} no es mayor de edad`);
    }
}
imprimirProfesiones(rommel);

mayorDeEdad(rommel);