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


// Las constantes son valores que no cambian en la ejecución del programa, por convención es bueno ponerlas en mayusculas
const MAYORIA_DE_EDAD = 18;

// Función anonima 
/*const esMayorDeEdad = function (person) {
    return person.age >= MAYORIA_DE_EDAD;
}*/

// Arrow Function
const esMayorDeEdadArrowOne = person => {
    return person.age >= MAYORIA_DE_EDAD;
}

/*
*Cuando una función solo retorna un valor podemos quitar el "return" ya que este se asume impicitamente, 
*además no es necesario usar llaves pues se puede hacer en una sola linea 
*/ 
const esMayorDeEdadArrowTwo = person => person.age >= MAYORIA_DE_EDAD;

/*
* También se puede pasar parametros de forma que usemos la desestructuracion de objetos, en este caso
* la función recibe un objeto he intenta obtener el atributo age 
*/ 
const esMayorDeEdad = ({ age }) => age >= MAYORIA_DE_EDAD;



function mayorDeEdad(person) {
    if (esMayorDeEdad(person)) {
        console.log(`${person.firstName} ${person.lastName} es mayor de edad`);
    } else {
        console.log(`${person.firstName} ${person.lastName} no es mayor de edad`);
    }
}


function permitirAcceso(person) {
    if (!esMayorDeEdad(person)) {
        console.log('Acceso Denegado');
    } else {
        console.log('Acceso Permitido');
    }
}

permitirAcceso(rommel);


mayorDeEdad(rommel);
