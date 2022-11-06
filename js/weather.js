const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "c36ad735fc7ac66ef6198ced0b15a705";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}　${Math.floor(data.main.temp)}˚　`;
    });
}
function onGeoError() {
  alert("권한 허용 시 위치 및 날씨 정보를 제공합니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
