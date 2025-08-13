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
    const bookReadStatus = document.getElementById('readInput');
    const title = bookTitleInput.value;
    const author = bookAuthorInput.value;
    const read = bookReadStatus.checked;
    console.log(title);
    console.log(author);
    console.log(read);

    addBookToLibrary(title, author, read);
    displayBooks();
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
    container.innerHTML = '';
    let numberOfBooks = myLibrary.length;
    for (let i = 0; i < numberOfBooks; i++) {
        console.log(myLibrary[i]);
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        //create our card

        const bookTitle = document.createElement('div');
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add('bolded')
        bookCard.appendChild(bookTitle)
        //book title

        const bookAuthor = document.createElement('div');
        bookAuthor.textContent = myLibrary[i].author;
        bookCard.appendChild(bookAuthor);
        //author

        const statusContainer = document.createElement('div');
        statusContainer.classList.add('status-container');
        //creates a container for our status box
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'read';
        checkbox.checked = myLibrary[i].read;
        const label = document.createElement('label');
        label.textContent = 'Have you read it?';
        label.htmlFor = checkbox.id;
        statusContainer.appendChild(label);
        statusContainer.appendChild(checkbox);
        bookCard.appendChild(statusContainer);
        //checkbox

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
        const container = document.getElementById('container');
        bookCard.appendChild(button);
        //button 

        container.appendChild(bookCard)
    }
}
//functions

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", false);
addBookToLibrary("Game of Thrones", "G.R.R. Martin", false);
addBookToLibrary("The Tester", "Mr Test", true);
displayBooks();
//test code


// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. 

// One easy solution is giving them a data-attribute that corresponds to the unique id of the respective book object.

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create Book prototype function that toggles a book instance’s read status.