let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
  "December",
];
let setDay = days[date.getDay()];
let setHour = date.getHours();
let setMinutes = date.getMinutes();
let setDayNum = date.getDate();
let setMonth = months[date.getMonth()];
if (setHour < 10) {
  setHour = `0${setHour}`;
}
if (setMinutes < 10) {
  setMinutes = `0${setMinutes}`;
}
let isTime = `${setDay} ${setHour}:${setMinutes}`;
let time = document.querySelector("#time");
time.innerHTML = isTime;
let setDate = document.querySelector("#date");
setDate.innerHTML = `${setDay} , ${setMonth} ${setDayNum}`;
function submitCity(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let city = document.querySelector("#search-engine");
    let selectedCity = document.querySelector("#selected-city");
    let sity = city.value;
    current(sity);
    if (city.value.length === 0) {
      alert("Please enter a city.");
    } else {
      selectedCity.innerHTML = city.value;
    }
  }
}

let searchCity = document.querySelector("#search-engine");
searchCity.addEventListener("keyup", submitCity);

function getWeather(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${currentTemp}˚C`;
}
function current(sity) {
  let apiKey = "ff992df60e8c388664e8c387bf3c174c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

function currentPos(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "ff992df60e8c388664e8c387bf3c174c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}
function onClick() {
  navigator.geolocation.getCurrentPosition(currentPos);
}
let currentCity = document.querySelector("#btn");
currentCity.addEventListener("click", onClick);
