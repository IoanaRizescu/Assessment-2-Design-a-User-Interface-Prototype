// Function to make any element editable (h2 or p)
function makeEditable(element) {
    element.addEventListener('click', function () {
        const currentText = element.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        element.replaceWith(input);
        input.focus();

        input.addEventListener('blur', function () {
            const updatedText = input.value;
            const newElement = document.createElement(element.tagName);
            newElement.textContent = updatedText;
            input.replaceWith(newElement);
            makeEditable(newElement); // Reapply listener
        });

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
    });
}

// Apply editable functionality to h2 and p elements in the existing lists and tasks
document.querySelectorAll('h2, p').forEach(makeEditable);

// Function to add a new list dynamically with editable h2
function addNewList(listTitle = 'New List') {
    const board = document.querySelector('.board');
    const newList = document.createElement('div');
    newList.classList.add('list');

    const title = document.createElement('h2');
    title.textContent = listTitle;
    newList.appendChild(title);
    makeEditable(title);  // Make the new list title editable

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('card-container');

    // Remove the example task and leave the container empty for new tasks
    newList.appendChild(taskContainer);

    // Create "Add Card" button for the new list
    const addCardButton = document.createElement('button');
    addCardButton.textContent = 'Add Card';
    addCardButton.classList.add('add-card');
    addCardButton.addEventListener('click', function () {
        const taskText = prompt('Enter task text:');
        if (taskText) {
            addTask(taskText, taskContainer); // Add task to this list
        }
    });

    newList.appendChild(addCardButton);

    board.appendChild(newList);
}

// Function to add a new task to a specific list
function addTask(taskText, taskContainer) {
    const task = document.createElement('div');
    task.classList.add('card');

    const taskContent = document.createElement('p');
    taskContent.textContent = taskText;
    task.appendChild(taskContent);

    makeEditable(taskContent);  // Make the task editable

    taskContainer.appendChild(task);
}


// Add event listener to "Add List" button
document.querySelector('.add-list').addEventListener('click', function () {
    addNewList();  // Call to add a new list when the button is clicked
});
