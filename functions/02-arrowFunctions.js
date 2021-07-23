/*
ARROW FUNCTIONS 

arrow functions are expressional functions that can be simplified into one of the two forms: Concise body and Block body. The main goal is to generate a shorter syntax for writing a function.
*/


// Regular function

function regularFunction() {
    console.log('Just a regular function');
}

regularFunction();



//      (1)         (2)(3)  (4)
let arrowFunction = () => console.log('function in one line')

arrowFunction();

/*
    1: A variable created to hold our value of our anonymous arrow function
        - Arrow functions are ALWAYS anonymous.

    2: Parameters are still capable of being added 
        - parameters would go in the () as they would for a normal function, BUT if we only have 1, no more no less, parameter, we do not need (). If we have no parameters we are still required to put ().

    3: "How we see an arrow": This is JS syntax that says we are about to process a function 
    4: The code the arrow will run. ex. console.log('Blah Blah');
        */

let arrowFunction = (x) => console.log(x);

arrowFunction(10);



// Concice vs Block body


// CONCISE
// When we have a simple return response from our arrow function, it makes sense to write it in a concise, simpler way. When we use a concise body arrow function, the "return" statement is implied (meaning that we do not have to write it).


                                    //   Implied return
let conciseBody = (x,y) => x + y;
let result = conciseBody(1,2); // return sets conciseBody(1,2) = 3
console.log(result);


let slightlyComplexConcice = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`)

slightlyComplexConcice(3,1);
slightlyComplexConcice(1,3);


// BLOCK BODY 
// The 'return' keyword is required. We will also include curly braces {}.
// Sometimes it will make sense to use block body if we need to do multiple lines of code. 

let blockArrow = (x,y) => {
    return `${x} and ${y} are in a block body arrow function`
}

console.log(blockArrow(1,2));

// CHALLENGE

let hero = 'Robinhood';
let nock = 1;

let shot = (x,y) => y < 3 ? console.log(`${x} only shot ${y} arrow... `) : console.log(`${x} shot ${y} arrows at the target!`)

shot(hero,nock);


//==========================================pt2=======================================v=========

let hero = 'Robin Hood'
let nock = 1;

// 1 - Block body arrow function (?)
// 2 - pass in 2 variables
// 3 - run the consitional
// 4 - repeat the code until the result changes?

let shoot = (x, y) => {

    for(y; y < 4; y++) // to avoid confusion from y <= 3
    if(y < 3) {
        console.log(`${x} only shot ${y} arrow... `);
    } else {
        console.log(`${x} shot ${y} arrows at the target!`);
    };
}


shoot(hero, nock);
        