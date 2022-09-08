const prompt = require('prompt-sync')();

const userName = prompt('Type your name: ');
const lastName = prompt('Type your last name: ');
const weight = prompt('Type your weight: ')
const height = prompt('Type your height: ')
const data = prompt('Type your date of hospitalization: ')
const diabetic = prompt('Your is diabetic? ')

console.log(`\nYour name: ${userName}`);
console.log(`Your last name: ${lastName}`);
console.log(`Your weight: ${weight}`)
console.log(`Your height: ${height}`)
console.log(`Date of hospitalization: ${data}`)
console.log(`Your is diabetic: ${diabetic}`)