/* 
    - Populating and Referring
    - Methods
    - Length
    - Internating
*/
// POPULATING AND REFERRING
//              0         1         2
let list = ['bananas', 'oreos', 'apples']

console.log(list[1]);

/*
    - when we call an array we can append, or add, square brackets on the end of an array name with the index number of the value we want to refrence. This is SQUARE BRACKET NOTATION

    - JS starts counting at 0, so when we console.log list[0], we should see 'banana'
*/


//===============================================================================================
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 4];

console.log(students[6]);
console.log(typeof students);
// arrays are also objects

console.log(students instanceof Array);
// the instanceof operator is used to check the type of an object at run time. remember arrays are technically objects

// challenge
/*
console.log from the students array
    - the name Matthew (first one)
    - the number 25
    - the phrase 'Shake n Bake'
    - print out 'Hello Sophie
*/

console.log(students[4]);
console.log(students[7]);
console.log(students[9][1]);
console.log(`Hello ${students[9][2]}`);


// ARRAY METHODS 

// we can call on multiple different array methods that will allow us to manipulate that array as we need to //

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

// . push will add to our array
food.push('Pizza'); 
console.log('push: ', food);

// Remove from our array\

food.pop('Pizza'); // this should remove an item from an array
console.log('pop: ', food);

food.shift();
console.log('shift: ', food)  // remove first item from array

food.unshift('Chicken', 'Garlic'); // add items to the beginning of an array
console.log('unshift: ', food);

food.splice(2, 1, 'Bananas'); // remove an insert items(s) from an array
// (position to remove, how many to remove, what to add in that location)
console.log('splice: ', food);

food.splice(1, 0, 'Ice Cream'); // indert icecream into position 1
console.log('second splice: ', food);


//  LENGTH

let long = [0,1,2,3,4,5,6,7,8,9,10]
console.log(long.length); // 11 items 
let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length); // 6 items

/*
iterating

forEach - 

    -  the forEach() method executes a provided fucntion once for each element in an array
    - the forEach() does this same as a for loop or a for of loop ---> both iterate over the same properties
    
    - provides callback fuction up to 3 arguments: 
    1. the value.
    2. the index
    3. the array object itself 
*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre']

for(let i = 0; i < colorList.length; i++) {
    console.log(colorList[i]);
}

colorList.forEach( color => console.log(color) ); 
// a callback fucntion that is either called or passed as a parameter to the fun


// how do i make an arrow function
let something = (colorParameter) => {
         // code here 
}


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre']

let logItem = item => console.log(item);
colorList.forEach(logItem);



let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre']

colorList.forEach( (item, index) => {
    console.log(item);
    console.log(index);
} )


