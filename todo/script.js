const taskInput = document.querySelector('.task-input');
const remove = document.querySelector('.remove-task');

function addTask() {
    if(taskInput.value === ''){
        alert("No task entered to add\nAdd some task first");
    }else{
        let taskContainer = document.querySelector('.task-container');
        let innerDiv = document.createElement('div');
        taskContainer.appendChild(innerDiv);
        innerDiv.className = 'task';
        let newSpan = document.createElement('span');
        innerDiv.appendChild(newSpan);
        newSpan.id = 'newtask';
        newSpan.textContent = taskInput.value;     
        let rmvBtn = document.createElement('button');
        innerDiv.appendChild(rmvBtn);
        rmvBtn.className = 'remove-task';
        rmvBtn.textContent = "x";
        taskInput.value = '';
    }
}

document.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains('remove-task')) {
        let taskToRemove = event.target.closest('.task');
        if (taskToRemove) {
            taskToRemove.remove();
        }
    }
});
