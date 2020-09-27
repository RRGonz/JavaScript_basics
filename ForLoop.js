// Esta función genera numeros aleatorios entre dos numeros un minimo y un maximo excluyendo el maximo 
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// For Loop

for (let index = 0; index < 10; index++) {
  console.log(getRandomArbitrary(1,11));      
}

// This is an object
var rommel = {
    //Key      //Value
    firstName: 'Rommel',
    lastName: 'Gonzalez',
    age: 28,
    weight: 75
}

console.log(`${rommel.firstName} ${rommel.lastName} antes pesa: ${rommel.weight} kg`);

const INCREMETO_PESO = 0.2;
const META = rommel.weight - 3;

const engordar = person => person.weight += INCREMETO_PESO;
const adelgazar = person => person.weight -= INCREMETO_PESO;

for (let i = 1; i <= 365; i++) {
    var random = Math.random();
    if (random < 0.25) {
        engordar(rommel);
    } else if (random < 0.50) {
        adelgazar(rommel);
    }
}

console.log(`${rommel.firstName} ${rommel.lastName} Despues pesa: ${rommel.weight.toFixed(1)} kg`);

