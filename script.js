const btnSubmit = document.getElementById("submit");
const formSubmit = document.querySelector(".formPopup");
const btnCancel = document.getElementById("cancel");
const btnAdd = document.getElementById("addBook");
const popup = document.querySelector(".bookPopup");

formSubmit.addEventListener("submit", addBookToLibrary);

btnCancel.addEventListener("click", removePopup);
btnAdd.addEventListener("click", showPopup);

function removePopup() {
  formSubmit.reset();
  popup.style["display"] = "none";
}

function showPopup() {
  popup.style["display"] = "block";
}

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(event) {
  event.preventDefault();

  //Get names submitted in the current form

  let currentBook = document.getElementById("name").value;
  let currentAuthor = document.getElementById("author").value;
  let currentNumberOfPages = document.getElementById("number-of-pages").value;
  let currentReadStatus = document.getElementById("read").checked;

  //Creating a unique object with the given input and adding it to library

  myLibrary.push(
    new Book(
      currentBook,
      currentAuthor,
      currentNumberOfPages,
      currentReadStatus
    )
  );
  removePopup();

}
