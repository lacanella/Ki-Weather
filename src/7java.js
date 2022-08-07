function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0{hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0{minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function showTemperature(responce) {
  let tempElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#cityname");
  let conditionElement = document.querySelector("#conditions");
  let dateElement = document.querySelector("#currentdate");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  tempElement.innerHTML = Math.round(responce.data.main.temp);
  cityElement.innerHTML = responce.data.name;
  conditionElement.innerHTML = responce.data.weather[0].description;
  dateElement.innerHTML = formatDate(responce.data.dt * 1000);
  humidityElement.innerHTML = responce.data.main.humidity;
  windElement.innerHTML = Math.round(responce.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`
  );
}

let apiKey = "fc91beb744f93e422747179ad98c56f9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
