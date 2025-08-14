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
    // stop the submit/form from reloading the page

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
    // Process form input into variables and add book to library

    formContainer.classList.toggle("hidden");
    form.reset();
    // If submit passes required checks, close the popup and clear the form
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault(); // stop form from reloading the page
    form.reset(); //resets the form
    formContainer.classList.toggle('hidden');
});
//form button listeners

const myLibrary = [];
//empty book array

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = crypto.randomUUID();
}
//book object constructor

Book.prototype.getId = function () {
    return this.id;
};

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};
//book object prototype methods


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
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'read';
        checkbox.checked = myLibrary[i].read;

        checkbox.addEventListener('change', () => {
            myLibrary[i].toggleRead();
        });
        //listens for changes on read status

        const label = document.createElement('label');
        label.textContent = 'Have you read it?';
        label.htmlFor = checkbox.id;
        statusContainer.appendChild(label);
        statusContainer.appendChild(checkbox);
        buttonsContainer.appendChild(statusContainer);
        //checkbox

        bookCard.dataset.id = myLibrary[i].id;
        //apply our unique ID to the card and button

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', () => {
            const bookID = myLibrary[i].getId();
            const index = myLibrary.findIndex(book => book.id === bookID);
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
            displayBooks();
        });
        deleteButton.dataset.id = myLibrary[i].id;
        buttonsContainer.appendChild(deleteButton);
        bookCard.appendChild(buttonsContainer);
        //deleteButton

        container.appendChild(bookCard)
        //apply everything
    }
}
//functions

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", false);
addBookToLibrary("Game of Thrones", "G.R.R. Martin", true);
addBookToLibrary("The Tester", "Mr Test", true);
displayBooks();
//test code