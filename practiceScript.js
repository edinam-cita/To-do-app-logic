const tasksArray = [];

const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  const toDoTasks = taskInput.value.trim();
  if (toDoTasks === "") {
    alert("Please Enter a Task!");
  } else {
    addTasks(toDoTasks);
    taskInput.value = "";
  }
});

function addTasks(task) {
  tasksArray.push({ text: task, completed: false });
  renderTasks();
}

function renderTasks() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasksArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasksArray[i].text;

    tasksArray[i].completed == true ? li.classList.add("completed") : "";

    li.addEventListener("click", function () {
      tasksArray[i].completed = !tasksArray[i].completed;
      renderTasks();
    });

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.addEventListener("click", function (e) {
      e.stopPropagation();
      tasksArray.splice(i, 1);
      renderTasks();
    });

    taskList.appendChild(li);
    li.appendChild(deletebtn);
  }

  const taskCounter = document.querySelector("#taskCounter");
  taskCounter.textContent = `You have ${tasksArray.length} task${
    tasksArray.length !== 1 ? "s" : ""
  }`;
}
