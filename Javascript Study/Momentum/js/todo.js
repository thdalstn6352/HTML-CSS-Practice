const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDOs() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteToDo(e) {
  const li = e.target.parentElement;
  const liId = li.id;
  toDos = toDos.filter((element) => String(element.id) !== liId);
  li.remove();
  saveToDOs();
}

function loadToDos() {
  const toDoArray = localStorage.getItem("todos");
  if (toDoArray) {
    const toDo = JSON.parse(toDoArray);
    toDo.forEach(paintToDo);
  }
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.id = newTodoObj.id;
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodoObj.text;
  toDoList.appendChild(li);
  toDos.push(newTodoObj);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newTodo,
  };
  paintToDo(newToDoObj);
  saveToDOs();
}

loadToDos();
toDoForm.addEventListener("submit", handleToDoSubmit);
