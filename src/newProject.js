
const popupContainer = document.getElementById('popupContainer');
const cancelButton = document.getElementById('cancelButton');
const submitButton = document.getElementById('submitButton');

function showPopup(){
    popupContainer.style.display= 'block';
}

function hidePopup(){
    popupContainer.style.display = 'none';
}

document.getElementById('todoInput').addEventListener('click', showPopup);
cancelButton.addEventListener('click', hidePopup);


function createNewProject(title, description){
    //Creates a new project
    const newProject = {
        title: title,
        description: description,
    };
    console.log("New Project", newProject);

    //updating the sidebar with new project title
    const sidebar = document.querySelector('.side-bar');
    const newProjectTitle = document.createElement('div');
    newProjectTitle.textContent = title;
    sidebar.appendChild(newProjectTitle);

    //link the new project to the dashboard
    const dashboardHeader = document.querySelector('.dashboard header h1');
    dashboardHeader.textContent = title;

    // display the project description
    const dashboardDescription = document.createElement('p');
    dashboardDescription.textContent = description;
    document.querySelector('.dashboard header').appendChild(dashboardDescription);
}

function handleNewProjectFormSubmit(event){
    event.preventDefault();

    //get values from form
    const projectTitle = document.getElementById("projectTitle").value;
    const projectDescription = document.getElementById("projectDescription").value;

    //call function to create new project
    createNewProject(projectTitle, projectDescription);

    //clear the form inputs after submission
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDescription").value = "";

    hidePopup();
}

function handleNewProjectButtonClick(event){
    event.preventDefault();
    const newProjectForm = document.querySelector(".addProjectForm");
    newProjectForm.style.display = "block";
    showPopup();
}

//function to intialise new project functionality
export function intialiseNewProject(){
    const newProjectForm = document.querySelector(".addProjectForm");
    const newProjectButon = document.getElementById("todoInput");

    //Event listener for submission
    newProjectForm.addEventListener("submit", handleNewProjectFormSubmit);
    newProjectButon.addEventListener("click", handleNewProjectButtonClick);
}

//function to show and hide the popup form
function showTaskForm(){
    const taskForm = document.querySelector('.addTaskForm');
    taskForm.style.display = 'block';
}

function hideTaskForm(){
    const taskForm = document.querySelector('.addTaskForm');
    taskForm.style.display = 'none';
}

//Event listener for the "+New Task" button

document.getElementById('addTask').addEventListener('click', showTaskForm);

//function to handle the submission of a new task
function handleNewTaskFormSubmit(event){
    event.preventDefault();

    //Get values from the form
    const taskTitle = document.getElementById('taskTitle').value;
    const taskNotes = document.getElementById('taskNotes').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    //create a new task object
    const newTask = {
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

//Displaying tasks in the task list
export function displayTask(task){
    const taskList = document.querySelector('.task-list');

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    const title = document.createElement('h3');
    title.textContent = task.title;

    const description = document.createElement('p');
    description.textContent = task.notes;

    const dueDate = document.createElement('p');
    dueDate.textContent = 'Due Date: ' + task.dueDate;

    const priority = document.createElement('p');
    priority.textContent = 'Priority: ' + task.priority;

    const creationDate = document.createElement('p');
    creationDate.textContent = 'Added on: ' + task.createDate.toLocaleString();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskElement);
    });
    taskElement.appendChild(checkbox);
    taskInfo.appendChild(title);
    taskInfo.appendChild(description);
    taskInfo.appendChild(dueDate);
    taskInfo.appendChild(priority);
    taskInfo.appendChild(creationDate);
    taskElement.appendChild(taskInfo);
    taskElement.appendChild(deleteButton);

    taskList.appendChild(taskElement);
}


document.addEventListener("DOMContentLoaded", intialiseNewProject);