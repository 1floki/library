const btnSubmit = document.getElementById("submit");
const formSubmit = document.querySelector(".formPopup");
const btnCancel = document.getElementById("cancel");
const btnAdd = document.getElementById("addBook");
const popup = document.querySelector(".bookPopup");
const container = document.querySelector(".container");
let deleteButtons = [];
let deleteButtonsArray = [];

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
  this.toggleReadStatus = function () {
    this.read ^= true;
    this.read = Boolean(this.read);
  };
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
  removeAllChildNodes(container);
  updateDom();
  updateQuery();
}

function updateDom() {
  //loops over the myLibrary list containing objects
  //Creates proper html elements for book, author, no. of pages
  //adds class of book to the elements and appends them in container
  for (let i = 0; i < myLibrary.length; i++) {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book", `${i}`);

    let bookTitle = document.createElement("h3");
    bookTitle.textContent = `Title: ${myLibrary[i].title}`;
    bookDiv.appendChild(bookTitle);

    let bookAuthor = document.createElement("h3");
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookDiv.appendChild(bookAuthor);

    let bookPages = document.createElement("h3");
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    bookDiv.appendChild(bookPages);

    let readTitle = document.createElement("label");
    readTitle.setAttribute("for", `${myLibrary[i].title}-checkbox`);
    readTitle.textContent = "Read Status: ";
    bookDiv.appendChild(readTitle);

    let readStatus = document.createElement("INPUT");
    readStatus.setAttribute("type", "checkbox");
    readStatus.setAttribute("id", `${myLibrary[i].title}-checkbox`);
    readStatus.setAttribute("name", `${myLibrary[i].title}-checkbox`);
    readStatus.setAttribute("data-checkid", i);
    readStatus.checked = myLibrary[i].read;
    bookDiv.appendChild(readStatus);

    let breakIn = document.createElement("br");
    bookDiv.appendChild(breakIn);

    let deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete Book";
    deleteBook.setAttribute("data-buttonind", i);
    deleteBook.classList.add("delete-button");
    bookDiv.appendChild(deleteBook);

    let bookContainer = document.querySelector(".container");
    bookContainer.appendChild(bookDiv);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function updateQuery() {
  deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtonsArray = Array.from(deleteButtons);
  deleteButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      deleteBookFromLibrary(btn.dataset.buttonind);
    });
  });
}


function deleteBookFromLibrary(bookNumber) {
  if (bookNumber < myLibrary.length) {
    myLibrary.splice(bookNumber, 1);
    removeAllChildNodes(container);
    updateDom();
  }
}

