// LOOPS

/*
Loops allow us to to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.


loops help us repeat a process without writing a lot of code.
*/


/*
STRUCTURE

We have to set up our loops in a way that we can
1) See where we are in a loop
2) Consider what sort of condition we want to run it against, and
3) Note when we are done with that condition and move to the next itteration.


we need to:
    1) Create an Index
    2) Run a conditon
    3) Change to the indexing variable
*/

// Lets count to 10


for( let i = 0; i <= 10; i++) {
    console.log(i);
}

/*
We state our loop with a "for". Within this function, we are injecting some parameters that JS will run against. index; condition; change index --> result

Within parameters, we are stating an index declarstion to 0. This is our baseline. We move on by asking if that variable is less than or equal to the number 10, take that set number and add one to it. Once that is processed, return that value (in this case we "console.log()"). Once that condition is met we return a FALSE which ends our loop.

THIS is important to note 

for(<create an index variable); <run condition>; <change index>) {
    <return results>
    <cont. until the condition is met.>
}
*/

//? If we don't indicate what our condition is, the loop will not have a finish line and thus we will have an infinite loop

// INFINITE LOOP


/*
for(let i = 0; i++) {
    console.log(i);
}
*/

// No confition means that JS doesn't know when to stop and will never assume that information.


//Challenge

for(let i = 2; i >= -10; i -= 4) {
    console.log(i);
}

// We are't limited by positive or negative numbers. We can cycle though variables assigned with strings

let word = 'SuperLongWord'



for(let b = 0; b < word.length; b++) {
    console.log(b, word[b]);

// 1) we set a value of each index and are displaying that
// 2) We set to display the value within the "object" of a word. Each character that is assigned to the variable and this is how they are cycling through it.

console.log(`The letter ${word[b]} is in position ${b}`)
}


/*
FOR IN LOOPS

With For loops we are seeking and index value and running it againt a condition.
For In loops do not require an index number
*/

let city = {
    name: 'Indianapolis',
    pop: 10000,
    speedway: true
}

for(info in city) {
    console.log(info);
    console.log(city[info]);
}


/*
format: for(variable in object) {
    run code
}
*/
//             0       1         2           3         4
let list = ['Milk', 'Eggs', 'Lunch Meat', 'Bread', 'Bananas'];

/* 
let list = {
    0: 'Milk"
    1: 'Eggs'
    2: 'Lunch Meat'
    3: 'Bread'
    4: 'Bananas'
}
*/

for(item in list) {
    console.log(item);
    console.log(list[item]);
}


//! Challenge 
//            012345
let myName = 'saDie'

let propCase;
/* Write a for loop over a name, and will be capitalize the first letter, and make all of the other letters lowercase.
*/

for(let index = 0; index <= myName.length - 1; index ++) {
    // console.log(myName[index])
    if(index === 0) {
        propCase = (myName[index].toUpperCase()); // propCase = 'D'
    } else {
        propCase += (myName[index].toLowerCase()); // 'D' + 'w' = Dw
    }
}

console.log(propCase);


// FOR IN VERSION

let myName = 'dwIghT';
let propCase

for(index in myName) {
    index == 0 ? propCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}

console.log(propCase);


/*
    FOR OF LOOP

    In order to run a for of loop, the 'thing' must be run like an array
*/
// ERROR
// let myObject = {
//     string: 'Peter',
//     boolean: true,
//     number: 1
// };

// for(item of myObject) {
//     console.log(item);
// }


let indexArray = ['spot 1', 2, true, 'not fifth']

for(let pos of indexArray) {
    console.log(pos, 'was run through a "for of" loop');
}

/*
 for(variable of itterable) {
     code goes here

     *an itterable is something that has numbers assigned to it like an array, where the first item is assigned a 0, the second 2, and so on... [eg. Arrays, Strings]
 }
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters) {
    if(worker === 'Dwight' || worker === 'Michael') {
        console.log(worker, 'works in the office')
    }
}