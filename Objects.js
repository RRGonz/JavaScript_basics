// This is an object
var rommel = {
    //Key      //Value
    firstName: 'Rommel',
    lastName: 'Gonzalez',
    age: 28
}

function printName(person) {
    var firstName = person.firstName;
    console.log(firstName);
}

function printNameOnlyParam({ firstName }) {
    
    console.log(firstName.toUpperCase());
}

printName(rommel);
printNameOnlyParam(rommel);
printNameOnlyParam({ firstName: 'Ramses' });


/*
 * Destructuring Objects
 */

 //chalenge
 function destructurinObjects(person) {
     var { firstName } = person;
     var { age } = person;

     console.log(`Hello, my name is ${firstName} and I'm ${age} years old`);
 }

 destructurinObjects(rommel);