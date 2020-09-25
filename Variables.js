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

var nameUpperCase = firstName.toUpperCase();
var lastNameLoweCase = lastName.toLowerCase();
var nameLenght = lastName.length;
var firstLetterName = firstName.charAt(0);
var fullName = `${firstName} ${lastName.toUpperCase()}`;
var str = firstName.substr(1,3);

console.log(str);