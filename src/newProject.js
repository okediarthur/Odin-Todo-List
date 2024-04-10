const popContainer = document.getElementById('popupContainer');
const cancelBtn = document.getElementById('cancelButton');
const submitBtn = document.getElementById('submitButton');

function showPopup(){
    popContainer.style.display = 'block';
}

function hidePopup(){
    popContainer.style.display = 'none';
}

document.getElementById('todoInput').addEventListener('click', showPopup);
cancelBtn.addEventListener('click', hidePopup);

//funtion to handle new project submit
function handleNewProjectSubmit(event){
    event.preventDefault();

    //get values from the form
    const projectTitle = document.getElementById("projectTitle").value;
    const projectDescription = document.getElementById("projectDescription").value;

    //function to create new project
    createNewProject(projectTitle, projectDescription);

    //clear form inputs after submission
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDescription").value = "";

    hidePopup();
}



//Function to create new project
export function createNewProject(title, description){

    const newProject = {
        title: title,
        description: description,
    };
    console.log("New Project", newProject);

    //Update the sidebar to have the new project
    const sidebar = document.querySelector('.side-bar');
    const newProjectTitle = document.createElement('div');
    newProjectTitle.textContent = title;
    sidebar.appendChild(newProjectTitle);
    //find a way to add a button that shows the project

    //link new project to the dashboard
    const dashboardHeader = document.querySelector('.dashboard header h1');
    dashboardHeader.textContent = title;

    //display project description
    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;
    document.querySelector('.dashboard header').appendChild(projectDescription);
}