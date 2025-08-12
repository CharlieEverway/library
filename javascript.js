const container = document.querySelector('#libraryContainer')
const addBookButton = document.getElementById('addBookButton')
//DOM selectors


addBookButton.addEventListener('click', function () {
    alert("ITS WORKING")
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
        container.appendChild(bookCard)
    }
}
//functions


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", false);
addBookToLibrary("Game of Thrones", "G.R.R. Martin", false);
addBookToLibrary("The Tester", "Mr Test", true);
displayBooks();
//test code


