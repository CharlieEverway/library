const container = document.querySelector('#libraryContainer')
const addBookButton = document.getElementById('addBookButton')
const formContainer = document.querySelector('#formContainer')
const form = document.querySelector('#popupForm');
const cancelButton = document.querySelector('#cancelButton');
//DOM selectors


addBookButton.addEventListener('click', function () {
    formContainer.classList.toggle('hidden');

});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    // stop form from reloading the page

    const bookTitleInput = document.getElementById('title');
    const bookAuthorInput = document.getElementById('author');
    const bookReadStatus = document.getElementById('read');
    const bookTitle = bookTitleInput.value;
    const bookAuthor = bookAuthorInput.value;
    const bookRead = bookReadStatus.checked;
    console.log(bookTitle);
    console.log(bookAuthor);
    console.log(bookRead);
    // Process form input into variables

    formContainer.classList.toggle("hidden");
    form.reset(); 
    // If success, close the popup and clear the form
});


cancelButton.addEventListener('click', (event) => {
    event.preventDefault(); // stop form from reloading the page
    form.reset(); //resets the form
    formContainer.classList.toggle('hidden');
});
//buttons

const myLibrary = [];
//book array

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function () {
        return `${this.title} by ${this.author}`;
    };
}
//book object constructor


function addBookToLibrary(title, author, read) {
    let newBook = new Book(title, author, read)
    myLibrary.push(newBook);

}

function displayBooks() {
    let numberOfBooks = myLibrary.length;
    for (let i = 0; i < numberOfBooks; i++) {
        console.log(myLibrary[i]);

        const bookCard = document.createElement('div');
        bookCard.textContent = myLibrary[i].title;
        bookCard.classList.add('card');
        container.appendChild(bookCard)
    }
}
//functions


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", false);
addBookToLibrary("Game of Thrones", "G.R.R. Martin", false);
addBookToLibrary("The Tester", "Mr Test", true);
displayBooks();
//test code


// Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the
//  library: author, title, number of pages, whether it’s been read and anything else you might want. 


// How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar
//  or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most
//  likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the
//  submit input tries to send the data to a server by default. This is where event.preventDefault(); will
//  come in handy. Check out the documentation for event.preventDefault and see how you can solve this issue!



// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. 

// One easy solution is giving them a data-attribute that corresponds to the unique id of the respective book object.

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create Book prototype function that toggles a book instance’s read status.