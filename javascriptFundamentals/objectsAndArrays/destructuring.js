/*
    !ARRAY DESTRUCTURING

    - allows us to 'unpack' values from arrays or properties from objects
    - similar to syntax to array literals BUT  is on the left side of the assignment operator
    - this will define what values to unpack
*/



const boardGames = ['Catan', 'Monopoly', 'Clue']

// array destructuring syntax
const [gameOne , gameTwo, gameThree] = boardGames;
console.log(gameOne);
console.log(gameTwo);
// if i don't define game three, it will ignore the value
console.log(gameThree);


/*
    REST OPERATOR
    
    - using the rest operator will look almost exactly like using spread operator

        - Spread expands an array into its elements

*/

const hitchHikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: true} ]

let [charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);



/// new array

const harryPotter = ['Snape', 'Harry', 'Moaning Myrtle', 'Ron Weasley', 'Hermione', 'Dumbledore']

let [firstName, secondName, thirdName] = harryPotter;
console.log(firstName, secondName, thirdName);

let [first, second, ...mainCharacter] = harryPotter;
console.log(first, second, mainCharacter);




/*
   ! OBJECT DESTRUCTURING

*/

const game = {
    title: 'Legend of Zelda: Breath Of The Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U']
}

const {title, developer, platforms} = game;

console.log(title, developer);
console.log(developer); // in an object, order doesn't matter
console.log(platforms);

const games = [
    {
        title: 'Legend of Zelda: Breath Of The Wild',
        developer: 'Nintendo',
        platforms: ['Nintendo Switch', 'Wii U']
    },
    {
        title: 'Bloodborne',
        developer: 'From Software',
        platforms: ['PS4']
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: ['PC', 'MacOS', 'Linux', 'PS4', 'Xbox One', 'Nintendo Switch', 'PSVita', 'iOS', 'Android']
    }
]

const [{title: gameOne, developer: devOne}, gameTwo, gameThree] = games;

console.log(gameOne, devOne);
console.log(gameTwo);
console.log(gameThree);


//!------------------------------------------------

const games = [
    {
        title: 'Legend of Zelda: Breath Of The Wild',
        developer: 'Nintendo',
        platforms: ['Nintendo Switch', 'Wii U']
    },
    {
        title: 'Bloodborne',
        developer: 'From Software',
        platforms: ['PS4']
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: ['PC', 'MacOS', 'Linux', 'PS4', 'Xbox One', 'Nintendo Switch', 'PSVita', 'iOS', 'Android']
    }
]

for(let {title, developer} of games) {
    console.log(`${title} is developed by ${developer}`);
}

