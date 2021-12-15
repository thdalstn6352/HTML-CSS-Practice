const clock = document.querySelector("div#clock");

function getTime() {
  // const now = new Date().toTimeString().split(" ")[0];
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}`;
}
getTime();
setInterval(getTime, 1000);
