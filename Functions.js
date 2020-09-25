var firstName = 'Rommel'; // Global Varible
var age = 28; // Global Variable

function printAgeWithOutParams() {
    console.log(`${firstName} is ${age} years old`);
}


function printAgeWithParams(n, a) {
    // n and a are local variables
    console.log(`${n} is ${a} years old`);
}

printAgeWithParams('Ramses', 28);
printAgeWithParams('Rommel', 28);

/*
 * JavaScript Scope
 * */ 

