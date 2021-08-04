/*
SPREAD OPERATORS

*/

const nameOne = ['Summer', 'Jerome']
const nameTwo = ['Adam', 'Hustin']
const copiedNames = ['Levi', nameOne, nameTwo]

// console.log(copiedNames);

const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo]
nameOne.unshift('Justin');
console.log(nameOne, copiedNamesSpread);


//cannot use spread operator if you're not using it for anything
// ...nameTwo

// This is inside of an array
console.log(nameTwo)

// Taking everything out of the array and just shows the strings printed out
console.log(...nameTwo)

/*
    ... Numbers ----------------------------
*/

console.log(Math.min(5, 1, -3 ));

const prices = [10.99, 5.99, 3.50, 2.49, 5.49]

console.log(Math.min(prices)); // not a number

console.log(Math.min(...prices));

/*
    ... objects ------------------------

*/

const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo',
        enemies: true
    }
];

const copiedPersons = persons;

persons.push({name: 'Bill and Ted', enemies: false});
console.log('original:', persons, 'copy:', copiedPersons);

/*
    primitive variable = primitive value

    variables      values
    x               10
    y               'abc'
    z               null
--------------------------------

    let x = 10
    let y = 'abc'

    let a = x
    let b = y

    console.log(x, y, a, b)     --->     10, 'abc', 10, 'abc'

    a = 5
    b = 'xyz'

    console.log(x, y, a, b)     --->     10, 'abc', 5, 'xyz'
*/

// lets see the code in the console 

let x = 10
let y = 'abc'

let a = x
let b = y

console.log(x, y, a, b)     //--->     10, 'abc', 10, 'abc'

a = 5
b = 'xyz'

console.log(x, y, a, b)     //--->     10, 'abc', 5, 'xyz'

/*
    - 3 Data types that are passed by refrence:
        - array
        - functions
        - objects

        * all considered objects
    - non primirive variables are given a refrence to the value they "contain" - this refrence "points" to a location in memory.
--------------------------------------------------

let arr = []
arr.push(1)


    ? VARIABLES       VALUES      ADDRESS     OBJECT
        arr          <#001>       #001        []
        arr          <#001>       #001        [1]


    ------------------------------------------

    let refrence = [1]
    let refCopy = refrence;


    ? VARIABLES       VALUES      ADDRESS     OBJECT
    refrence           <#001>       #001        [1]
    refCopy            <#001>       #001 


    refrence.push(2)
    console.log(refrence, refCopy)
*/

// lets see actual code

let refrence = [1]
let refCopy = refrence;

refrence.push(2)
console.log(refrence, refCopy) // same thing

refCopy.push(3);

console.log(refrence, refCopy) // !same thing and changes BOTH variables

/*
 ? VARIABLES       VALUES      ADDRESS     OBJECT
    refrence           <#001>       #001    [1, 2]
    refCopy            <#001>       #001    [1, 2]

*/




const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo',
        enemies: true
    }
];

const copiedPersons = [...persons];

persons.push({name: 'Bill and Ted', enemies: false});

copiedPersons[0].name = 'Birdperson'
console.log('original:', persons, 'copy:', copiedPersons);

/*
    ... & avoiding changing both the original and copied array 
*/

const comics = [
    {
        title: 'Spider Man',
        year: 1962
    },
    {
        title: 'Detective Comics',
        year: 1939
    }
];

const copiedComics = comics.map(comic => ({
    title: comic.title,
    year: comic.year
}));

comics.push({ title: 'Calvin and Hobbes', year: 1985})
copiedComics[1].title = 'Detective Comics #27'

console.log('Original:', comics, 'Copied:', copiedComics);




