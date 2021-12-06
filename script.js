const btnSubmit = document.getElementById("submit");
const formSubmit = document.querySelector(".formPopup");
const btnCancel = document.getElementById("cancel");
const btnAdd = document.getElementById("addBook");
const popup = document.querySelector(".bookPopup");

formSubmit.addEventListener("submit", handleForm);

btnCancel.addEventListener("click", removePopup);
btnAdd.addEventListener("click", showPopup);

function removePopup() {
  popup.style["display"] = "none";
}

function showPopup() {
  popup.style["display"] = "block";
}

function handleForm(event) {
  event.preventDefault();
  console.log("Hello");
}
