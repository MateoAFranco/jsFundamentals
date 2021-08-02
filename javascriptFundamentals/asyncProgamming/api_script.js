const baseUrl = 'https://api.spacexdata.com/v2/rockets'


// two different ways to get a tag in our html
const searchForm = document.getElementsByTagName('form')[0];

const spaceShip = document.querySelector('ul'); // gets first ul tag


searchForm.addEventListener('submit', fetchSpace);
console.log(fetchSpace(1));

function fetchSpace(e) {
    e.preventDefault(); // this will stop out page from refreshing when we submit.
    console.log('clicked!')

    fetch(baseUrl) // starts the process of fetching or getting information from our source
    //.then(/* function goes here */)
    .then(result => { // when we have a promise, we call a method called '.then()'. This will be given a callback function to send the result
        // console.log(result);

    return result.json();
    })

    .then(json => {
    //  console.log(json);
    displayRockets(json);
    })
}

function displayRockets(data) {
    console.log('Inside displayRockets:', data);

    data.forEach(rocket => {
        console.log(rocket.name)
        let listItem = document.createElement('li'); // creates an empty li tag
        listItem.innerText = rocket.name; // change the text from the list item to rocket name
        spaceShip.appendChild(listItem) 
    })
}

// optional challenge
