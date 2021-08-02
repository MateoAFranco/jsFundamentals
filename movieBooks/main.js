// need an h1
// make it say something
// put it on a page

let header1 = document.createElement('h1');

header1.innerText = 'Our favorite books!'

// to put the h1 tag on the page

// appendChild()

// using dot notation to get to the body tag

document.body.appendChild(header1)

//-----------------------------------------

const books = ['Lord of The Rings', 'The Richest Man In Babylon', 'The Red Tent', 'Sell Anything To Anyone', 'Stormlight Archives']

/*
    <table>
        <tr>
            <td>Book one</td>
        </tr>
        <tr>
            <td>Book two</td>
        </tr>
    </table>

*/


let table = document.createElement('table')
let headerRow = document.createElement('tr');
let titleHeader = document.createElement('th');

titleHeader.innerText = 'Book Names'

document.body.appendChild(table);
table.appendChild(headerRow)
headerRow.appendChild(titleHeader)



books.forEach(function (current) {
    console.log(current);
    let row2 = document.createElement('tr')
    let firstBook = document.createElement('td')
    
    firstBook.innerText = current;

    table.appendChild(row2);
    row2.appendChild(firstBook);
});


for(let i = 0; i < books.lengh; i++) {
    let row2 = document.createElement('tr')
    let firstBook = document.createElement('td')
    
    firstBook.innerText = [i];

    table.appendChild(row2);
    row2.appendChild(firstBook);
}


