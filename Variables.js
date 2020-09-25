/* 
 *Lesson 1. Variables
*/
var firstName = 'Rommel'; 
var lastName = 'Gonzalez' ;
var age = 28;

console.log('Hello '+firstName+' '+lastName);
console.log('Tengo '+age);
console.log(typeof(firstName));

/* 
 *Lesson 2. Variables: Strings
*/

var nameUpperCase = firstName.toUpperCase(); // Change to uppercase the letters 
var lastNameLoweCase = lastName.toLowerCase(); // Change to lowercase the letters
var nameLenght = lastName.length; // returns the number of letters from a String
var firstLetterName = firstName.charAt(0); // get the first character of a String
var fullName = `${firstName} ${lastName.toUpperCase()}`;

// chalenge find the last letter of your name
var str = firstName.substr(firstName.length-1,firstName.length);

console.log(str);

/* 
 *Lesson 3. Variables: Numeros
*/
var edad = 27

// edad = edad + 1
edad += 1

var peso = 75

// peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100
var totalStr = total.toFixed(3)
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas