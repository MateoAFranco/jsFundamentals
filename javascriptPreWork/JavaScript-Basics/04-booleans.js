// A boolean data type can only two possible values

let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;


// Printing values

console.log(2 > 1);
console.log(3 > 2);

var test = 2 >= 3; //What will this print?
console.log(test);
console.log("Two is greater than one? " + (2 >= 1));
console.log(3 >= 1);

// == Versus ===

// Some more practice

console.log("Password12!" === "Password12!!");
console.log(1 !== 2);
console.log(10 !== 10);

// Logical Operators

console.log("&& :", 2===2 && 1===1); // True because both 2 and 1 are strictly equal to eachother

console.log("|| :", 2===2 || 2===1); // True because the first two is true which means even if "2===1" is false, it would still be true due to the or (||) operator

console.log("!=", 2 != 1) // True because 2 is not 1

// What is the difference between == and ===?
// == is equal but not equal in type
// === is strictly equal in type (exactly equal)