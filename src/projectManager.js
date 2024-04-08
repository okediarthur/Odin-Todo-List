//Function to create default Projects

function createDefaultProjects(){
    const defaultProjectsData = [
        { title: "Being Awesome", description: "Always remember to smile."},
    { title: "Always Smile", description: "Remember to be nice."},
    ]
    defaultProjectsData.forEach(projectData => {
        const project = createProject(projectData.title, projectData.description);
        addProjectToSidebar(project);
    });
};

function addProjectToSidebar(project){
    const sidebar = document.querySelector('.side-bar');
    const projectElement = document.createElement('div');
    projectElement.textContent = project.title;

    projectElement.addEventListener('click', () => {
        showProjectDetails(project);
    });
    sidebar.appendChild(projectElement);
}

function showProjectDetails(project){
    const dashboardHeader = document.querySelector('.dashboard header h1');
    dashboardHeader.textContent = project.title;

    const dashboardDescription = document.querySelector('.dashboard header p');
    dashboardDescription.textContent = project.description;
}

createDefaultProjects();
