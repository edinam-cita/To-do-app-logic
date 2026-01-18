const taskArray = [];




const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  handleAddTask(taskInput);
});

function handleAddTask(inputValues) {
  const taskItem = inputValues.value.trim();
  if (taskItem === "") {
    alert("Please enter a task");
  } else {
    addTasks(taskItem);
    inputValues.value = "";
  }
}

function loadFromStorage(){
  
}

function saveToStorage(){

}

function addTasks(tasks) {
  taskArray.push({ text: tasks, completed: false, isEditing: false });
  renderTasks();
}

function renderTasks() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    const li = document.createElement("li");

    function handleEditTask(editValues) {
      const editItem = editValues.value.trim();
      if (editItem === "") {
        alert("Please enter a task");
      } else {
        taskArray[i].text = editItem;
        editValues.value = "";
      }
    }

    if (taskArray[i].isEditing === false) {
      li.innerHTML = `<div><input type="checkbox" class="ticker">  <span class="taskDisplay">${taskArray[i].text}</span></div> 
    <div><button class="editBtn">Edit</button><button class="deleteBtn">X</button></div>`;

      if (taskArray[i].completed === true) {
        li.classList.add("completed");
      }

      const checkBox = li.querySelector(".ticker");
      checkBox.checked = taskArray[i].completed;

      checkBox.addEventListener("change", function () {
        taskArray[i].completed = checkBox.checked;
        renderTasks();
      });

      const deletebtn = li.querySelector(".deleteBtn");
      deletebtn.addEventListener("click", function (e) {
        e.stopPropagation();
        taskArray.splice(i, 1);
        renderTasks();
      });
      const editBtn = li.querySelector(".editBtn");
      editBtn.addEventListener("click", function (e) {
        e.stopPropagation();

        taskArray[i].isEditing = true;
        renderTasks();
      });
    } else {
      li.innerHTML = `<div>
      <input 
        type="text" 
        id="editInput" 
        placeholder="Enter a new task"
      />
      <button id="newAddBtn">New</button><button id="cancelBtn">C/N</button>
    </div>`;

      const editInput = li.querySelector("#editInput");
      const newAddBtn = li.querySelector("#newAddBtn");
      const cancelBtn = li.querySelector("#cancelBtn");

      newAddBtn.addEventListener("click", function () {
        handleEditTask(editInput);
        taskArray[i].isEditing = false;
        renderTasks();
      });

      cancelBtn.addEventListener("click", function () {
        taskArray[i].isEditing = false;
        renderTasks();
      });
    }
    taskList.appendChild(li);
  }
  const taskCounter = document.querySelector("#taskCounter");
  taskCounter.textContent = `You have ${taskArray.length} task${
    taskArray.length !== 1 ? "s" : ""
  }
`;
}
