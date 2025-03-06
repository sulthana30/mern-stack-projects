/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const clearTasksBtn = document.getElementById("clear-tasks");
    
    addTaskBtn.addEventListener("click", addTask);
    clearTasksBtn.addEventListener("click", clearCompleted);
    taskList.addEventListener("change", moveCompleted);

    function addTask() {
        if (taskInput.value.trim() === "") return;
        
        const li = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        
        const taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        taskText.classList.add("task-text");
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => li.remove());
        
        li.appendChild(taskText);
        li.appendChild(checkbox);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
    
    function moveCompleted() {
        const completedTasks = [...document.querySelectorAll(".task-checkbox:checked")].map(cb => cb.parentElement);
        completedTasks.forEach(task => {
            task.classList.add("completed");
            taskList.appendChild(task);
        });
    }
    
    function clearCompleted() {
        document.querySelectorAll(".completed").forEach(task => task.remove());
    }
});
