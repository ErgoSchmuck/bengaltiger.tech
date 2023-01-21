function createNotepad() {
  // Create a textarea element
  var textarea = document.createElement("textarea");

  // Append the textarea to the container div
  var container = document.getElementById("notepad-container");
  container.appendChild(textarea);
}

// Call the createNotepad function when the page loads
document.addEventListener("DOMContentLoaded", createNotepad);

