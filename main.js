let fp = document.querySelector(".frontpage");
let startBtn = document.querySelector(".start");
let lp = document.querySelector(".ListPage");
let hp = document.getElementById("high-priority");
let mp = document.getElementById("medium-priority");
let lpLow = document.getElementById("low-priority");

startBtn.addEventListener("click", function() {
    fp.style.display = "none";
    lp.style.display = "block";
});

function createTaskItem(task, dueDate) {
    let listItem = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = task;
    taskText.className = 'task-text';
    let dueDateText = document.createElement('span');
    dueDateText.textContent = " | Due: " + dueDate;
    dueDateText.className = 'due-date';
    let actions = document.createElement('span');
    actions.className = 'actions';
    
    let editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit';
    editIcon.addEventListener('click', function() {
        let newTask = prompt("Update the task:", taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
        }

        let newDueDate = prompt("Update the due date and time:", dueDateText.textContent.replace(" | Due: ", ""));
        if (newDueDate) {
            dueDateText.textContent = "  Due: " + newDueDate;
        }
    });
   
    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    deleteIcon.addEventListener('click', function() {
        let confirmDelete = confirm("Are you sure you want to delete the task?");
        if (confirmDelete) {
            listItem.remove(); 
        }
    });
   
    actions.appendChild(editIcon);
    actions.appendChild(deleteIcon);
    listItem.appendChild(taskText);
    listItem.appendChild(dueDateText); 
    listItem.appendChild(actions);
    
    return listItem;
}

document.querySelector(".high-priority").addEventListener("click", function() {
    let task = prompt("Enter high priority task:");
    if (task) {
        let dueDate = prompt("Enter due date and time (e.g. 15-09-24 15:30):");
        let listItem = createTaskItem(task, dueDate);
        hp.appendChild(listItem); 
    }
});

document.querySelector(".medium-priority").addEventListener("click", function() {
    let task = prompt("Enter medium priority task:");
    if (task) {
        let dueDate = prompt("Enter due date and time (e.g. 15-09-24 15:30):");
        let listItem = createTaskItem(task, dueDate);
        mp.appendChild(listItem); 
    }
});

document.querySelector(".low-priority").addEventListener("click", function() {
    let task = prompt("Enter low priority task:");
    if (task) {
        let dueDate = prompt("Enter due date and time (e.g. 15-09-24 15:30):");
        let listItem = createTaskItem(task, dueDate);
        lpLow.appendChild(listItem); 
    }
});
