
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


document.addEventListener("DOMContentLoaded", intialiseNewProject);