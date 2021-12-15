const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo");
// const todo = document.querySelector("#todo-section");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const saveUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.className = HIDDEN_CLASSNAME;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  showGreetingMsg(username);
}

function showGreetingMsg(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo.className = "todo";
  // todo.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Welcome ${username}`;
}

if (saveUsername === null) {
  loginForm.className = "login";
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  showGreetingMsg(saveUsername);
}
