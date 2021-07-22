/*
What is a variable?

Variables are named containers for storing data.
We can think of these containers as resources as we call upon later. Each variable allows us to store data, which could be a variable or a function, that we will to refrence back to.
*/


let a = 2;

/* 
 - "let" is our KEYWORD
 - "a" is our NAME of our variable
 - "=" is an ASSIGNMENT OPERATOR
 - "2" is our variables VALUE
 */

 let b = 1;

 console.log(a + b); // what should we get? 3

 /* 
 Restrictions with variables   

 - a variable must begin with a letter, underscore, or dollar sign.
 - numbers may follow the above characters, but cannot come first in the name.
 - javascript is also case sensetive - 'Hello' and 'hello' are different variables
 - no spaces are allowed in variable names
 - camelCase is best practice for naming variables in js. This will help keep names of variables readable.
    ex:
        let myName = 'Jerome';
        is easier to read than 
        let myname = 'Jerome';
 */

let startingWithLetter ='Works';

let _startingWithUnderscore = 'Works';

let $startingWithDollarSign = 'Works';

// let 2startingWithNumber = 'Breaks'; // CANNOT start a variable name with a number//

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign);

// ctrl + option + n will run the code runner extension (mac).

/* 
KEYWORDS

var, let, const

- var: the 'old' keywords for variables. We will not use this much but could still use it depending on the project. We will focus on let and const.

- let: the 'New' keyword for variables, which was introduced in ES6, which is the latest version of ECMAScript, which is the standardization of JS.

- const: also 'new' and declares an unchangable, or constant, variable. The only limit to a constant variable to a constant variable is that when they are declared and assigned, their value will never change.
*/

var variable = 'var variable';
let letVariable = 'let variable';

console.log(variable, letVariable);

/* Declarations are the LEFT SIDE of the assigned operation (=) within a variable
    - let x

Initalization are the RIGHT SIDE of the assignment operator (=)
and sets the value for the variable
    - let x = 10

*/

let x;
console.log('Declaration:', x);

x = 10;

x = 33;

console.log('Initialization:', x)

let y ='Hello';
console.log(x, y);

let today = 'great!';
const efa = 'wonderful!';
console.log(today, efa); // great! wonderful!

today = "awesome!"
console.log(today, efa); // awesome! wonderful!


// efa = 'super!' // awesome! wonderful!

// const example; // error
// example = 'Testing';

// console.log(example);
