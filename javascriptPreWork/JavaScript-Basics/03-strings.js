// String examples

console.log("I was born in Indianapolis")
console.log("I've lived in three states")
console.log("I think Indiana is the best!")
console.log("I am a millionare")

// Variables

var tweet = "Lebron is king! Westbrook for presidemt!";
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = "jamespauloconnor";

// Numbers in a string

let age = "21";
let years ="3";
console.log(age + years); // You won't get 24, what do you get? I get 213

// Concatenation

var birthCity = "Indianapolis";
var birthState = "indiana";

console.log(birthCity + ", " + birthState)

// Strings and Numbers

let ageInAugust = 40;
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);

// String with two variables

let gradYear = 1994;
let highSchool1 = "Bill Murray High School";

console.log("I graduated from " + highSchool1 + " in " + gradYear + ".");

// length - returns the length of a string (including spaces)
console.log(highSchool.length);

// lowercase to uppercase
console.log(highSchool.toUpperCase()); // BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); // bill murray high school

console.log(highSchool.split(" ")); // splits the string into an array on each space ['Bill', 'Murray', 'High', 'School' ]

console.log(highSchool.slice(0, 11)); // Extracts from highSchool [0] to and including highSchool[11]

