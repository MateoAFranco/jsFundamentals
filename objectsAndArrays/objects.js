/*
OBJECTS

    - objects are used to store multiple sets of data in a key/value pair
    - denoted by {}
*/

let netflix = {
    // name: value
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {
                    eposode: 1,
                    episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName: 'Diversity Day'
                },
                {
                    episode: 3,
                    episodeName: 'Health Care'
                },
                {
                    episode: 4,
                    episodeName: 'The Alliance'
                },
                {
                    episode: 5,
                    episodeName: 'Basketball'
                },
                {
                    episode: 6,
                    episodeName: 'Hot Girl'
                }
            ]
        }
    }
}

console.log('All Data: ', netflix); // dot notation if we know the name of the key/alue pair

console.log('Just season info: ', netflix.season1.seasonInfo.episodeInfo)

// challenge - console.log a specific episode

console.log(`Episode ${netflix.season1.seasonInfo.episodeInfo[1].episode}: `, netflix.season1.seasonInfo.episodeInfo[1].episodeName);

/*
    JSON OBJECTS

        - JSON stands for JavaScript Object Notation
        - the JSON syntax is derived from JavaScript Object syntax, but the JSON format is text only
        - JSON exists as a string - useful when fetching data from a server. It needs to be translated into native JavaScript object if we want to access the data
*/


let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// We can use Object methods to help us gather info we might not otherwise know


//Object keys

console.log(Object.keys(spaceJam.toonSquad)); // gives an array of the keys in an object

console.log(Object.keys(spaceJam.toonSquad.duck)); // Will give us the index numbers for the string 'Daffy Duck'

console.log(Object.values(spaceJam.toonSquad)); // gives us an array with the values of each key in an object

/*
    OBJECT BRACKET NOTATION

    -  object bracket notation can allow us to find a value in an object we wouldm't be able to access using dot notation. 
    - we also use object bracket notation to store a key in a variable and use that to access info in an object
    - this works because all key names in an object or strings
*/

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);

console.log(test);
console.log(typeof test[0]);

// Dot notation

console.log(garden.flower);

// square bracket notation

console.log(garden['flower']);


let baking = {};
baking['zucchini'] = 'better make some bread!'
baking.bakeTime = 60; // works
// console.log(baking); // also works


let garden = {
    vegetable: 'zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10    
}
console.log(baking[garden['vegetable']]);



// using square bracket notation can also be a good idea if the key has a space in the name

let testObj = {
    'Spaces Here': true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);

