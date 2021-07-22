// COMPARISON OPERATORS

// EQUAL

'3' == 3;
console.log('3' == 3);
/*
JavaScript is helpful because it does something called coercion when comparing values.

 - coertion is the process of converting a value from one type to another. 
 - In the above example, JS assumes that were trying to check if '3' is equal to 3, even though one value is a string and another is a number.
*/

// STRICT EQUAL - this overrides js coertion

console.log(3===3); //true
console.log('3'===3); //false


// NOT EQUAL

console.log('3' != 3); // false

// STRICT NOT EQUAL

console.log('3' !== 4);

// GREATER THAN

3 > 2;

// LESS THAN

2 < 3;

// GREATER THAN OR EQUAL TO

3 >= 2; // not be confused with => (fat arrow functions which will be explored later.)


// LESS THAN OR EQUAL TO

2 <= 3;

// AND

2 && 3;

// OR

2 || 3;
