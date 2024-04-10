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

