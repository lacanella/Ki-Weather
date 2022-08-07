function showTemperature(responce) {
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(responce.data.main.temp);

  let cityElement = document.querySelector("#cityname");
  cityElement.innerHTML = responce.data.name;

  let conditionElement = document.querySelector("#conditions");
  conditionElement.innerHTML = responce.data.weather[0].description;

  let precipitationElement = document.querySelector("#precipitation");
  precipitationElement.innerHTML = responce.data.precipitation;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = responce.data.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(responce.data.wind.speed);
}

let apiKey = "fc91beb744f93e422747179ad98c56f9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(showTemperature);
