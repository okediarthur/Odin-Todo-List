//funtion handles task creation

export function handleNewTaskFormSubmit(event){
    event.preventDefault();

    //get values from the form
    const taskTitle = document.getElementById('taskTitle').value;
    const taskNotes = document.getElementById('taskNotes').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    //create a new task object
    const newtask = {
        title: taskTitle,
        notes: taskNotes,
        dueDate: dueDate,
        priority: priority,
        completed: false,
        createDate: new Date()
    };

    displayTask(newTask);

    //clearing the form
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskNotes').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = '';

    hideTaskForm();
}

document.getElementById('taskForm').addEventListener('submit', handleNewTaskFormSubmit);

//Display tasks in the task list
function displayTask(task){
    const tasklist = document.querySelector('.task-list');

    const taskElement = document.createElement('div')
    taskElement.classList.add('task');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    const title = document.createElement('h3');
    title.textContent = task.title;

    //event listener for the task title
    title.addEventListener('click', () => {
        loadTaskDetails(task); //call this function
    });

    const description = document.createElement('p');
    description.textContent = task.notes;

    const dueDate = document.createElement('p');
    dueDate.textContent = 'Due Date: ' + task.dueDate;

    const priority = document.createElement('p');
    priority.textContent = 'Priority' + task.priority;

    const creationDate = document.createElement('p');
    creationDate.textContent = 'Added on: ' + task.createDate.toLocaleString();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        tasklist.removeChild(taskElement);
    });
    taskElement.appendChild(checkBox);
    taskInfo.appendChild(title);
    taskInfo.appendChild(description);
    taskInfo.appendChild(dueDate);
    taskInfo.appendChild(priority);
    taskInfo.appendChild(creationDate);
    taskElement.appendChild(taskInfo);
    taskElement.appendChild(deleteButton);

    tasklist.appendChild(taskElement);

}

// function loadTaskDetails(task)
function loadTaskDetails(task){
    const dashboardHeader = document.querySelector('.dashboard header h1');
    dashboardHeader.textContent = task.title;
}

const popupContainer = document.getElementById('popupContainer');
const cancelButton = document.getElementById('cancelButton');
const submitButton = document.getElementById('submitButton');

function showPopup(){
    popupContainer.style.display = 'block';
}

function hidePopup(){
    popupContainer.style.display = 'none';
}


