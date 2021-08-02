/*
CONDITIONALS

FALSY VALUES
    A falsy value is a value that is considered false when encountered in a boolean text. There are 6 falsy values in JS.
        - false
        - 0
        - "", '', `` (any empty string)
        - null
        - undefined
        - NaN (not a number)

    What does this mean? Whenever JS is expecting a boolean value and is given one of these 6, it is evaluated as false.

    =====side note: There are also truthy values in JS, which tend to be much less limited. Examples include: 
    - true
    - {}
    - [] 
    - 42 (any number that is not 0)
    - 3.14 (any decimal)
    - "false" (any non empty string)
*/

// test if functions are truthy


/*
IF STATEMENTS

when we use comparison operators, we typically are asking if we can move to the next section of code. "if" something is true "then" do something.
*/


if(true) {
    // code to run if expression is true
    console.log('Truthy Test');
}
    // if(false) {
    //     console.log('Falsy Test');
    // }
    
let light = 'off';

if(light == 'on') {
    console.log('The light is on')
}


let weather = 65;
let rain = true;

if(weather <= 70 && rain == true){  // just one equal sign is a assignment operator
    console.log('I need a jacket')
}


// CHALLENGE


let batman = 'is the night';
let bruce = true;

if(batman == 'is the night' && bruce) {
    console.log('BATMAN!');
}

/*
    IF ELSE
    
    We can think of this as not only providing an answer if our condition evaluates to true, but also one if it ends up being false
*/

let today = 75;

if(today < 70) {
        // String interpolation! // STUDY THIS
    console.log(`It's ${today}, wear a jacket!`)
} else {
    console.log(`It's ${today}. No jacket needed!`)
}

/*
 ELSE IF

 This is a condition that will be  checked if the above condition is not met
*/

let cooktime = 60;

if(cooktime === 45) {
    console.log('Let us feast!')
} else if(cooktime > 45) {
    console.log(`It has been ${cooktime}?? Might meed a glass of water with this one!`);
} else if(cooktime >= 30) {
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
} else if(cooktime >= 20) {
    console.log(`It has only been ${cooktime} minutes. Wait another 20-25 minutes.`);
} else {
    console.log(`It has only been ${cooktime} minutes. Perhaps we could atleast try cooking it...`);
}

// CHALLENGE

let age = 30;

if(age >= 25) {
    console.log('You can rent a car!')
} else if(age >= 21) {
    console.log('You can drink!')
} else if(age >= 18) {
    console.log('You can vote!')
} else {
    console.log('Sorry you are not old enough to do anything! haha!')
}

/*
TERNARIES

They are if/else statements but look different
*/

let myName = 'Mateo'

if(myName === 'Mateo') {
    console.log(`Hi ${myName}!`);
} else {
    console.log(`Not sure I know ${myName}`)
}


//TERINARY
// condition ? if true : else result 

// condition                    if true run this            else run this
myName === 'Mateo' ? console.log(`Hi ${myName}!`) : console.log(`Not sure I know ${myName}`);

// Both methods work but they just look different!

let hero = 'Batman'
let villain = 'Mr. Feeze'

hero == 'Batman' && villain == 'Riddler'
 ? console.log('What has a head and tail but no body?')
  : hero == 'Batman' && villain == 'Joker'
   ? console.log('Why so serious?')
    : hero == 'Batman' && villain == 'Mr. Freeze'
     ? console.log('Ice to meet you!')
      : console.log(`${hero} is the night!`);

// Challenge - write if/else statement as a terinary


let lampOn = false;
let daytime = true;

// != is ! = (with no spaces)
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

// Making it into a terinary!

lampOn == true && daytime != true
 ? console.log('The lamp is on during the night') : lampOn != true && daytime != true ? console.log('The lamp is off during the night') : lampOn == true && daytime == true ? console.log('The lamp is on during the day') : lampOn != true && daytime == true ? console.log('The lamp is off during the day') : console.log('What lamp?');

 /*
 SWITCH STATEMENTS
 The switch statement executes a block of code depending on different cases.
 */

let instructor = 'Jerome'

 switch(instructor) {
// if(instructor === 'Jerome') {
    case 'Jerome':
        console.log(`${instructor} is a part of the Web Development team`);
        // }
        break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Josh': 
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
        // else 
    default: 
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);  
 }

 // Another switch statement

let staff = 'Jerome'

switch(staff) {
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is a part of the Web Development Team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.log(`${staff} is a part of the Software Development Team`);
    break;
    default:
        console.log(`Sorry, I can't find what ${staff} teaches.`);
}

let switchConditional = 'example';

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean') {
    case true:
        console.log(`${switchConditional} is a string or boolean!`)
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean!`)
}

// When we use the or (||), only one side of the or needs to be true

// When we use and (&&), both conditionals need to be true





//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 67;

switch(true) {
    case grade >= 89:
        console.log(`Your grade is ${grade}, you got an A!`)
        break;

    case grade >= 79:
        console.log(`Your grade is ${grade}, you got an B!`)
        break;

    case grade >= 66:
        console.log(`Your grade is ${grade}, you got an C!`)
        break;

    case grade >= 59:
        console.log(`Your grade is ${grade}, you got an D!`)
        break;

    case grade >= 59:
        console.log(`Your grade is ${grade}, you got an F!`)
        break;

    default:
        console.log('Please insert a value')
}



//! Challenge
/*
  Take this if else statement and translate it to both a ternary and a switch statement
*/
let character = "";
if(character === 'Michael'){
  console.log('That\'s what she said!');
} else if(character === 'Dwight') {
  console.log('It\'s not weed! It\'s hemp!');
} else if(character === 'Jim') {
  console.log('Bears. Beets. Battlestar Galactica.');
} else {
  console.log('*slow camera zoom*');
}


// Switch statement

let character = 'Dwight';

switch(true) {
    case character == 'Dwight':
        console.log('That\'s what she said!')
    break;

    case character == 'Michael':
        console.log('It\'s not weed! It\'s hemp!')
    break;

    case character == 'Jim':
        console.log('Bears. Beets. Battlestar Galactica.')
    break;

    default:
        console.log('I did not recognize that name')
}

// Terinary statement

let character = 'Jim';

character === 'Dwight' ? console.log('That\'s what she said!') : 
character === 'Michael' ? console.log('That\'s what she said!') : 
character === 'Jim' ? console.log('Bears. Beets. Battlestar Galactica.') : 
console.log('*Slow camera zoom*');