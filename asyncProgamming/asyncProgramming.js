/*
! ASYNCHRONOUS PROGRAMMING

- Asynchronous code will allow us to ignore the one line at a time rule

- Asynchronous programming allows a progran to domore than one thing at a time

- Makes it possible to run long-running actions without stopping the program to wsit for a response
*/

// Synchronous code

const secondSync = () => {
    console.log('Second Hello')
}


const firstSync = () => {
    console.log('First Hello')
    secondSync();
    console.log('End')
}

firstSync();

// Asynchronous code

const networkRequest = () => {
    // setTimeout is a method that will work in a browser and node.
    // js - we are using this to simulate a network request
    // setTimeout has two params: a callback function (which is a function that we pass into a parameter) and then how much time to wait in milliseconds
    setTimeout(() => {
        console.log('Async Code')
    }, 2000)
}

console.log('Hello World')

networkRequest();

console.log('End')

/*
   ! API

    - Application Program Interface
    an api is something that will allow us to talk to other programs, such as a database or server, however the api itself is not the datase or server. It will code with access to 

    - access to a server wil come in the form of ENDPOINTS
    - endpoints direct us to sets of data


    REST API
        - Representational State Transfer

        - it creates an object of requested set of data from the client and sends values back as response

        Methods:
            CRUD
                Create(POST)
                Read(GET)
                Update(PUT)
                Delete(DELETE)
                * we will go in depth in blue badge]



        ! FETCH()
        The fetch method is an asynchronous method, and it is a part of the browser window, NOT JS. This browser will start the process of 'fetching' or grabbing a resource from the network, and will return a promise when it is fulfilled

        - The promise is an unknown value that will eventually fulfulled with either a value or rejection (error)
            - pending: neither fulfilled or rejected
            - fulfilled: operation successful
            - rejected: failed

        

*/