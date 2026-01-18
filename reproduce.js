const taskArray = [];

const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  const taskItem = taskInput.value.trim();
  if (taskItem === "") {
    alert("Please enter a task");
  } else {
    taskInput.value = "";
    addTasks(taskItem);
  }
});

function addTasks(task) {
  taskArray.push(task);
  renderTasks();
}

function renderTasks() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = taskArray[i];

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";

    deletebtn.addEventListener("click", function (e) {
      e.stopPropagation();
      taskArray.splice(i, 1);
      renderTasks();
    });

    li.appendChild(deletebtn);
    taskList.appendChild(li);
  }

  const taskCounter = document.querySelector("#taskCounter");
  taskCounter.innerHTML = `You have ${taskArray.length} task${taskArray.length !== 1 ? "s": ""}`
}
 /* const newTask = prompt("Please Enter A New Task", "Task Here");
      const newestTask = newTask.trim();
      if (newestTask === null) {
      } else if (newestTask === "") {
        alert("Please enter a task");
      } else {
        taskArray[i].text = newestTask;
        renderTasks();
      }*/