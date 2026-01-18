let tasksArray = [];

const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  addTask(taskText);
  taskInput.value = "";
});

function addTask(task) {
  tasksArray.push(task);
  renderTasks();
}

function renderTasks() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";
  for (let i = 0; i < tasksArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasksArray[i];

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";

    deletebtn.addEventListener("click", function (e) {
      e.stopPropagation();
      tasksArray.splice(i, 1);
      renderTasks();
    });

    li.appendChild(deletebtn);
    taskList.appendChild(li);
  }
}
