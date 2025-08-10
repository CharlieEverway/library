function Book(title, author, pages, read){

    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function () {
        let bookInfo = this.title + " by " + this.author;
        return bookInfo;
    };
}
//book object constructor


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 2, false);
alert(theHobbit.info())

