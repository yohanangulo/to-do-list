const input = document.getElementById("new-task-input");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  if (!task) return alert("Please add a task");

  const tasks = document.getElementById("tasks");


  const taskContent = document.createElement("div");
  const taskClassList =
    "flex justify-between max-w-[800px] m-auto bg-taskBg p-4 rounded-lg mb-6 shadow-lg w-full transition duration-300".split(
      " "
    );
  taskClassList.forEach((classI) => taskContent.classList.add(classI));

  const taskInput = document.createElement("input");
  taskInput.classList.add("pr-4", "flex-1");
  taskInput.type = "text";
  taskInput.value = task;
  taskInput.readOnly = true;

  const actionsElem = document.createElement("div");
  actionsElem.classList.add("flex", "gap-5");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("font-bold", "text-deleteColor");

  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.classList.add("font-bold", "text-editColor");

  // building task
  tasks.querySelector('h2').style = 'display: none;'

  actionsElem.append(deleteBtn, doneBtn);
  taskContent.append(taskInput, actionsElem);
  tasks.appendChild(taskContent);

  input.value = null;

  // actions part

  doneBtn.addEventListener("click", () => {
    if (doneBtn.innerText == "Done") {
      taskContent.classList.add("bg-doneTask");
      doneBtn.innerText = "Undo";
    } else {
      taskContent.classList.remove("bg-doneTask");
      doneBtn.innerText = "Done";
    }
  });
  deleteBtn.addEventListener("click", () => {
    tasks.removeChild(taskContent)
    const tasksCount = tasks.getElementsByTagName('div')
    if (tasksCount.length == 0) tasks.querySelector('h2').style = 'display: block;'
  });
});
