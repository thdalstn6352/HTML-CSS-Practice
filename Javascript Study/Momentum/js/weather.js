function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${Math.round(data.main.temp)}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("error");
}

const API_KEY = "9ce0e6bd6eb4020dd06eb937b18d68d7";
console.log(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError));
