let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let weekday = days[now.getDay()];
let month = months[now.getMonth()];
let hour = now.getHours();
let minute = now.getMinutes();
let year = now.getFullYear();
let time = document.querySelector("#time");
let day = now.getDate();
time.innerHTML = `${weekday}, ${month} ${day} ${year} - ${hour}:${minute}`;

// get search engine
function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = temp;
  let result = document.querySelector("#city");
  result.innerHTML = response.data.name;
}

function searchCity(event) {
  event.preventDefault();
  let search = document.querySelector("#search-bar");
  let apiKey = "e54075cb944645dfdc31a4a40ed15bfc";
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showTemperature);
}

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", searchCity);

// getting the current Button

function displayTemp(current) {
  let temp = Math.round(current.data.main.temp);
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = temp;
  let result = document.querySelector("#city");
  result.innerHTML = current.data.name;
}

function showCurrent(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "e54075cb944645dfdc31a4a40ed15bfc";
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(displayTemp);
}

function currentPosisiton() {
  navigator.geolocation.getCurrentPosition(showCurrent);
}

let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", currentPosisiton);
