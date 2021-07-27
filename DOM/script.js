console.log('Hello from the script file!')

// !1 
console.log(document);
console.log(document.body);
document.getElementById('testParagraph');
// using console.dir to see the properties of the object instead of the html tag
console.dir(document.getElementById('testParagraph'));
console.log(document.getElementById('testParagraph'));
// document.getElementById('testParagraph').style.color = 'blue';

let testPara = document.getElementById('testParagraph');
testPara.style.color = 'green';
testPara.style.backgroundColor = '#815';
testPara.style.fontSize = '40px';

// This method will reach out to the html page and grab the first HTML element with the specific id into the method

// ! 2 queerySelectorAll & innerText/innerHTML

document.querySelectorAll('.sampleClass')
console.log(document.querySelectorAll('.sampleClass'));
// this will give us an array of all items within the "sampleClass" in a NodeLists


console.log(document.querySelectorAll('p.sampleClass'))
// give us an array with ONLY p tags that have the 'sampleClass'

document.querySelectorAll('p.sampleClass')[0].innerHTML = 'Hello World'
// we use square bracket notation to select an index from an array, even if it is one element. innerText just refrences or changes the text inside of the element.

let changeAll = document.querySelectorAll('p.sampleClass')

changeAll.forEach(pTag => {
    // pTag.innerText = 'My text has been changed using a foreach() method!';
    // pTag.textContent = 'My text has been changed using a foreach() method!';
    pTag.innerHTML = 'My text has been changed using a foreach() method!';
});

/*
INNERTEXT VS HTML VS TEXTCONTENT
    - innerText will simply refrence or allow us to change the text of a specific element. Will return visible text of a "node"

    - textContent does the same thing but will return a FULL text of a node

    - innerHTML allows us to set text as well as HTML elements, which will be nested inside of a current html element we are refrencing.

*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
console.log(document.getElementById('spanTest').innerHTML);

// ! addEventListener();

document.getElementById('clickThis').addEventListener('click',function(event) {
    // console.log(event);
    console.log(event.target);
    event.target.style.backgroundColor = 'red'
})

//! addEventListener - keyup

let input = document.getElementById('nameInput')

input.addEventListener('keyup', e => {
    console.log(e.target);
    console.log(e.target.value);
    // console.log(document.getElementsByTagName('p'));
    document.getElementsByTagName('p')[0].innerText = 'Something has changed'

    if(e.target.value ==' ') {
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...'
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`
    }
})