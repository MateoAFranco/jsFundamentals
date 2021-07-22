// Data and Structure types

/*
- Primitive data types:
    - boolean
    - undefined
    - string
    - number
    - bigInt *
    - symbol *
- null
- Object 
- Fucntion
*/

/*
BOOLEAN

A boolean has two possible values: true or false

*/

let on = true;
let off = false;

console.log(on);

console.log(off);


/*
NULL

A null value is an empty value. Think of it as an empty container that needs to be filled. Note: Null and Undefined are two different things.
*/

let empty = null;
console.log(empty);

/*
UNDEFINED

no value has been assigned to a container and doesn't even act as an empty container
*/

let unknown;

let undef = undefined;

// Whats the difference between null and undefined

/*
- Null is like and empty container with nothing in it.
- Undefined is a a variable that has never been set, or it hasn't been created yet.
*/

/*
NUMBERS

Literally just numbers

*/

let degrees = 82;
console.log(degrees);

let percise = 999999999;
console.log(percise);

let rounded = 9999999999999999; // 16 9's in the console becomes 1 with 16 0's
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let whatif = (0.2 * 10 + 0.1 * 10) / 10;
console.log(whatif);

/*
STRINGS

Strings represent text are wrapped in either single or double quotes.
*/

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';

console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that?"';
let bothQuotesAlt = "I then said, 'Thats pretty cool right?'";

console.log(bothQuotes);
console.log(bothQuotesAlt);

const contractions = "Now you can't run into any issues"
const contractions2 = 'Now you can\'t run into any issues'

console.log(contractions);
console.log(contractions2);

// Numbers and strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

// We can use an operation called 'typeof' to return a string of the variable's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

let addTest = 1050 + '100';
console.log(addTest);

// switch number and string

let addTest2 = '1050' + 100;
console.log(addTest2);


/*
OBJECTS

Objects are used to store many values.
Consider them a collection of many diffecent variables in one container
Denoted by curly brackets: {}
*/

let frodo = {
    // an object has many properties inside of it
    race: 'Hobbit', // string
    // name: value
    // we must separate properties in an object with a comma
    rigns: 1, // number
    sting: true // boolean
}

console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rigns); //Dot notation

/*
ARRAYS

Containers that hold in a list of items
denoted by [] square brackets
all items within the square brackets
regardless of the data type, all items are seoarared by commas
 
*/

let arrayList = ['position1', 'position2', 'position3'];
console.log(arrayList);

let anotherExample = ['muffins', 'pizza toppings', true, 17, 9485834598, false, null, undefined];
console.log(anotherExample);
console.log(anotherExample[0]); // square bracket notation

console.log(typeof anotherExample); // this is also an object


/*
ADDITION VS CONCATINATION

JS sees the + symbol in two different ways 
- when we use it with numbers, it will use the built-in math functionality
- when we use it with strings, it will ignore the math functionality and concats, or combines, the two strings into one
*/

let strings = 'one' + ' ' + 'is a number';
console.log(strings);

let concatDiff = 1050 + '100';
console.log(concatDiff);
console.log(typeof concatDiff);



// ! CHALLENGE time

let firstName ='Mateo';
let lastName ='Franco';
let houseNumber = 509;
let street = 'Greensprings Drive';
let city = 'Whiteland';
let state = 'Indiana';
let zipcode = 46143;

console.log(firstName, lastName + ',', houseNumber, street, zipcode + ',', city, state);

/*
STRING PROPERTIES

Propertis are qualities associated with data type
Strings have properties, or qualities, associated with them
the length of a string is a property

*/

let myName = 'Mateo';

console.log(myName.length);


/*
STRING: METHODS

methods are tools that help us manipulate data
.property .method()
no parens   parens
*/

let myNameIs = 'Mateo';
console.log(myNameIs.toUpperCase());

let home = 'My home is in Whiteland';
console.log('Include Method:', home.includes('black tea'));




// Challenge


let send = 'This sentence will be split into individual parts';

const myArr = send.split(' ')

console.log(myArr);








