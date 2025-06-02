// script.js

const addButton = document.querySelector(".add-button");
const modal = document.querySelector(".modal");
const bookContainer = document.querySelector(".book-container");
const bookNameInput = document.getElementById("book-name");
const bookAuthorInput = document.getElementById("book-author");
const bookDescriptionInput = document.getElementById("book-description");
const saveButton = document.getElementById("save-book");
const cancelButton = document.getElementById("cancel-book");

addButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

cancelButton.addEventListener("click", () => {
  modal.style.display = "none";
});

saveButton.addEventListener("click", () => {
  const name = bookNameInput.value.trim();
  const author = bookAuthorInput.value.trim();
  const description = bookDescriptionInput.value.trim();

  if (!name || !author || !description) {
    alert("Please fill in all fields");
    return;
  }

  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <h3>${name}</h3>
    <strong>${author}</strong>
    <p>${description}</p>
    <button class="delete-button">Delete</button>
  `;

  card.querySelector(".delete-button").addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
      card.remove();
    }
  });

  bookContainer.appendChild(card);
  modal.style.display = "none";

  bookNameInput.value = "";
  bookAuthorInput.value = "";
  bookDescriptionInput.value = "";
});
