const clock = document.querySelector("h2#clock");

function getTime() {
  const now = new Date().toTimeString().split(" ")[0];
  clock.innerText = now;
}
getTime();
setInterval(getTime, 1000);
