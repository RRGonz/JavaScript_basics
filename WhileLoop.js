// While Loop
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

const INCREMETO_PESO = 0.3;
const META = rommel.weight - 3;

var numeroDeDias = 0;

const engordar = person => person.weight += INCREMETO_PESO;
const adelgazar = person => person.weight -= INCREMETO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

while (rommel.weight > META) {
    if (comeMucho()) {
        engordar(rommel);
    }
    if (realizaDeporte()) {
        adelgazar(rommel);
    }
    numeroDeDias += 1;
}

console.log(`Pasaron ${numeroDeDias} días hasta que bajo de peso`);
