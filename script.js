document.getElementById("addButton").addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");
    
    // Create new task element
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="complete-btn" onclick="toggleComplete(this)">Complete</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    
    // Append task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to toggle completion of a task
function toggleComplete(button) {
    const taskText = button.parentElement.previousElementSibling;
    taskText.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}
