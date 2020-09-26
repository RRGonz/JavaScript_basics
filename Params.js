// This is an object
var rommel = {
    //Key      //Value
    firstName: 'Rommel',
    lastName: 'Gonzalez',
    age: 28
}


function paramasAsReference(person) {
    person.age += 1;
    console.log(person);
}

rommel
paramasAsReference(rommel);


function paramsAsValues(person) {
    return {
        ...person,
        age: person.age + 1
    }
}

paramsAsValues(rommel);