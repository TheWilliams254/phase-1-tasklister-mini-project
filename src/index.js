document.addEventListener("DOMContentLoaded", () => {
  // Selecting form, input field, and list
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Getting task description
    const taskText = input.value.trim();

    // Making sure that input is not empty
    if (taskText !== "") {
      // Creating a new list item
      const li = document.createElement("li");
      li.textContent = taskText;
      
      // Appending new task to the list
      tasksList.appendChild(li);

      // Clearing the input field
      input.value = "";
    }
  });
});
