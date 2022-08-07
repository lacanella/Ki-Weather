function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours<10){hours=`0${hours}`;}

  let minutes = date.getMinutes();
  if minutes (minutes<10){minutes=`0${minutes}`;}

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days [date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function ShowDay (timestamp) {
  let date = new Date(timestamp*1000);
  let day = date.getDay();
  let days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
  return days[day]
}

  let dateElement = document.querySelector("currentdate");
  dateElement.innerHTML = formatDate(timestamp);

function showTemperature(responce) {
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(responce.data.main.temp);

  let cityElement = document.querySelector("#cityname");
  cityElement.innerHTML = responce.data.name;

  let conditionElement = document.querySelector("#conditions");
  conditionElement.innerHTML = responce.data.weather[0].description;

 

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = responce.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(responce.data.wind.speed);

}

let apiKey = "fc91beb744f93e422747179ad98c56f9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(showTemperature);
