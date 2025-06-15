
  const addButton = document.querySelector(".add-button");
  const modal = document.querySelector(".modal");
  const bookContainer = document.querySelector(".book-container");
  const bookNameInput = document.getElementById("book-name");
  const bookAuthorInput = document.getElementById("book-author");
  const bookDescriptionInput = document.getElementById("book-description");
  const saveButton = document.getElementById("save-book");
  const cancelButton = document.getElementById("cancel-book");

  // Show modal
  addButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Hide modal
  cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
    clearModalFields();
  });

  // Save book and add to DOM
  saveButton.addEventListener("click", () => {
    const name = bookNameInput.value.trim();
    const author = bookAuthorInput.value.trim();
    const description = bookDescriptionInput.value.trim();

    if (!name || !author || !description) {
      alert("All fields are required!");
      return;
    }

    addBookCard(name, author, description);
    modal.style.display = "none";
    clearModalFields();
  });

  // Add book card to the DOM
  function addBookCard(name, author, description) {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <h3>${escapeHTML(name)}</h3>
      <strong>${escapeHTML(author)}</strong>
      <p>${escapeHTML(description)}</p>
      <button class="delete-button">Delete</button>
    `;
    bookContainer.appendChild(card);
  }

  // Delete book using event delegation
  bookContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-button")) {
      const card = e.target.closest(".book-card");
      if (card && confirm("Are you sure you want to delete this book?")) {
        card.remove();
      }
    }
  });

  // Clear modal input fields
  function clearModalFields() {
    bookNameInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
  }

  // Optional: Escape HTML to prevent injection
  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[m];
    });
  }
