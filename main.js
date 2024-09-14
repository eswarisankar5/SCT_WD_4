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

function createTaskItem(task) {
    let listItem = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = task;
    taskText.className = 'task-text';
    
    let actions = document.createElement('span');
    actions.className = 'actions';
    
    let editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit';
    editIcon.addEventListener('click', function() {
        let newTask = prompt("Update the task:", taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
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
    listItem.appendChild(actions);
    
    return listItem;
    
}
document.querySelector(".high-priority").addEventListener("click", function() {
    let task = prompt("Enter high priority task:");
    if (task) {
        let listItem = createTaskItem(task);
        hp.appendChild(listItem); 
    }
});

document.querySelector(".medium-priority").addEventListener("click", function() {
    let task = prompt("Enter medium priority task:");
    if (task) {
        let listItem = createTaskItem(task);
        mp.appendChild(listItem); 
    }
});

document.querySelector(".low-priority").addEventListener("click", function() {
    let task = prompt("Enter low priority task:");
    if (task) {
        let listItem = createTaskItem(task);
        lpLow.appendChild(listItem); 
    }
});
