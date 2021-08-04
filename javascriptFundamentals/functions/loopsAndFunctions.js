for (let j = 0; j < 5; j++) {
    console.log(j + 'number');
}

for (let j = 10; j > 5; j--) {
    console.log(j);
}

for (let j = 5; j < 16; j++) {
    console.log(j);
}

for (let j = 0; j <= 10; j += 2) {
    console.log(j);
}

//==============================================================================


let count = 0;

for( ;count < 9; ++count) {
    console.log(count);
}


let studentName = "pAuL"
let capName;

for(let x in studentName) {
    if(x == 0) {
        capName = studentName[x].toUpperCase();
    } else {
        capName += studentName[x].toLowerCase();
    }
}

console.log(capName);


function hi() {
    console.log('Hello!')
}


blah = function () {
    return lala;
    lala = hi;
};

console.log(blah());


function sum(a, b) {
    return a + b;
};
console.log(sum(1, 2, 3, 4));


function foo() {
    return bar();
    function bar() {
        return "Poppin' bottles";
    }
}
console.log(foo());

function whatDoesItDo(val) {
    return val ? 1 : 2;
};
console.log(val);


function whatDoesThisDo(color) {
    if(color !== 'blue' || color !== 'green') {
        color = 'red';
    }
    return color;
}

console.log(whatDoesThisDo());
