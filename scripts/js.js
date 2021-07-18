function getWeather(response) {
  let currentTemp = Math.round(response.data.main.temp);
  console.log(currentTemp);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${currentTemp}˚C`;
}
function current(lat, lon) {
  let apiKey = "ff992df60e8c388664e8c387bf3c174c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}
function currentPos(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  current(lat, lon);
}
navigator.geolocation.getCurrentPosition(currentPos);
