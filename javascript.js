const addBookButton = document.getElementById('addBookButton')
//DOM selectors


addBookButton.addEventListener('click', function () {
    alert("ITS WORKING")
});

const myLibrary = [];
//book array

function Book(title, author, read) {

    this.title = title;
    this.author = author;
    this.read = read;
    this.info = function () {
        let bookInfo = this.title + " by " + this.author;
        return bookInfo;
    };
}
//book object constructor


function addBookToLibrary(title, author, read) {
    let newBook = new Book(title, author, read)
    myLibrary.push(newBook);

}
// take params, create a book then store it in the array


// All of your book objects are going to be stored in an array, 
// so you’ll need a constructor for books. 
// Then, add a separate function to the script (not inside the constructor) 
// that can take some arguments, create a book from those arguments, 
// and store the new book object into an array. 
// Also, all of your book objects should have a unique id, which can be
//  generated using crypto.randomUUID(). This ensures each book has a unique
//  and stable identifier, preventing issues when books are removed or rearranged.
//  Your code should look something like this (we’re showing only a basic skeleton w
// ithout function parameters):

// const myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // take params, create a book then store it in the array
// }


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", false);
const testbook1 = new Book("The Game of THrones", "G.R.R. Tolkien", false);
const testbook2 = new Book("The Teser", "J.R.R. Test", true);
myLibrary.push(theHobbit, testbook1, testbook2);

let numberOfBooks = myLibrary.length;
for (let i=0; i < numberOfBooks; i++) {
    console.log("HELLO?")
}




//loop through array

//Write a function that loops through the array and displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. 
// It might help for now to manually add a few books to your array so you can see the 
// display.
// alert(theHobbit.info())

