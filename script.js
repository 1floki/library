let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.page = pages;
  this.read = read;
}


function addBookToLibrary() {
    let currentAuthor = prompt("What's the name of the author?");
    let currentTitle = prompt("What's the title of the book");
    let currentPages = prompt("How many pages have you read");
    let currentRead = prompt("Have you finished the book (true/false)");

    let newBook = new Book(currentAuthor, currentTitle, currentPages, currentRead);
    myLibrary.push(newBook);
}


