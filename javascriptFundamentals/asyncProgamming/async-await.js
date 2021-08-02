/*
!      ASYNC AND AWAIT

    - allows us to program in a synchronous manner while allowing the code to still run in the background.
    - helps keep our sites responsive

*/

//! Async function (syntax)
// allows us to make a normal function asynchronous: which means  we can use await 
// must use the async keyword at the beginning of the function declaration


async function myFn() {
    await console.log('testing')
}

myFn()

const myAsyncFn = async () => {
    await console.log('testing') // testing
}

myAsyncFn();

const NewFn = () => {
    await console.log('testing') // testing
}

NewFn(); // error: wait is only valid in an async function


async function fn() {
    return 'hello'
}

fn().then(console.log) // give us a promise of 'hello' returned --> console.log to the value


//! AWAIT

// pauses an async function until a promise is settled (either resolved or rejected)

fetch('https://random.dog/woof.json')
    .then(result => result.json()) // takes in a result and converts it into json
    .then(json => console.log(json)) // prints that json in the console
    .catch(error => console.log(error)) // prints any errors that might occur

//! USING ASYNC

async function getWoof() {
    const response = await fetch('https://random.dog/woof.json')

    const json = await response.json()

    return json;
}

getWoof().then(console.log)