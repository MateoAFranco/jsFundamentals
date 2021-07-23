/*
     FUNCTIONS

     Functions are processes we call upon to run an action. They can do the following:

        - Take in an imput to process, modify, or respond (not required)
        - Return a value (not required)
        - Can be invoked (or called) as often as needed
*/

function hi() {
    // (3)
    console.log('Hi');


    // 1: funtion keyword - we use this to define a funtion
    // 2: name of the funtion, followed by parentheses - this is how we call the funtion
    // 3: code goes here - this will be the "brains" of the function
    // code goes here
}
// CALLING THE FUNCTION
// aka putting the fun in function
// in order to invoke (call) a fucntion, we will simply write its name and then parentheses

hi()

console.log(hi());
//when we call a function, JS will evaluate the function, meaning it will run all of the code and look for a value for it. IF we do not have a return statement within the function, we will get back undefined


let myName = 'mateo'

function myNameCap() {
    myName = myName.toUpperCase();
}

myNameCap();

console.log(myName);


/*
FUNCTION DECLARATION 

a chunk of code that performs a set of chunck when it is invoked (or called)
*/


function funcOne() {
    console.log('This is the code that we run in funtion one');
}

funcOne(); // we invoke or call a function by it's declared name followed by parenthesis

/*
    FUNCTION EXPRESSION

    assigning a function to a variable is what we call expression.
*/


let first = function funcTwo() {
    console.log('Code being run in the expression');
}

first();


let example = function() {
    console.log('What is my name?')
}

example();


/*
    ANONYMOUS FUNCTIONS

    anonymous funcitons are stored in memory but the runtime does not automatically create a refrence to it. 

    The main use would be to pass these funtions to other functions. Maybe have a ternary where if something is true, we run one function, else we run a different function.
*/


// common use would be to assign these to a variable
let myCoolFunction = function() {
    console.loh('Anonymous Fuction');
}

myCoolFunction();


true || false ? 
function() {console.log(true)} : 
function() {console.log(false)};



//EXAMPLE of writing anonymous functions

// fetch('something')
//      .then(function (response) {response.json})


/*
PARAMETERS

we will be using functions to pass information and return a result

parameters will allow functions to take in outside information
*/

function parameterFunct(num) {
    console.log(num + 1);
    return num + 5;
}

parameterFunct(7);
parameterFunct('bruce');
parameterFunct('another test');
parameterFunct([1,2,3,4,5]);

let returnTest = 5;
parameterFunct(returnTest); // 6
console.log(parameterFunct(returnTest));

//================================================================

let firstName = 'Jane';
let lastName = 'Doe';

function greeting(first, last) {
    console.log(`Hi, ${first}, welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`)
}
//         first       last
greeting(firstName, lastName); // correct

greeting(); // both undefined

greeting(firstName); // last name is still undefined

greeting(lastName); // first name is still undefined

greeting(firstName, null); // null is a purposefully empty value

greeting('', lastName); // EMPTY STRING 