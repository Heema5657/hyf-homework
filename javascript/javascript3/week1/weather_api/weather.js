const body = document.getElementById("div1");
const form = document.createElement("form");
body.appendChild(form);
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "insert a city");
body.appendChild(input);
const br = document.createElement("br");
body.appendChild(br);
const button = document.createElement("button");
button.innerText = "Search";
button.type = "submit";
body.appendChild(button);
const cityName = document.createElement("h3");
body.appendChild(cityName);
const cityTemp = document.createElement("p");
body.appendChild(cityTemp);
const weatherIcon = document.createElement("div");
body.appendChild(weatherIcon);
const windSpeed = document.createElement("p");
body.appendChild(windSpeed);
const weatherDesc = document.createElement("p");
body.appendChild(weatherDesc);
const sunriseSunset = document.createElement("p");
body.appendChild(sunriseSunset);
button.addEventListener("click", fetching);
function fetching(city) {
  city = input.value;
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=efad261ea0871d32650b1d12884554ad`
  )
    .then((res) => res.json())
    .then((data) => {
      renderData(data);
      getWeatherIcon(data);
      getSunriseandSet(data);
    });
}
function getWeatherIcon(data) {
  const iconValue = data.weather[0].icon;
  const image = document.createElement("img");
  image.src = `http://openweathermap.org/img/wn/${iconValue}@2x.png`;
  weatherIcon.appendChild(image);
}
function getSunriseandSet(data) {
  let sunrise = `${data.sys.sunrise}`;
  let rise = new Date(sunrise * 1000);
  let sunset = `${data.sys.sunset}`;
  let set = new Date(sunset * 1000);
  sunriseSunset.innerHTML = `Sunrise : ${rise}, Sunset: ${set}`;
}
function renderData(data) {
  cityName.innerHTML = data.name;
  cityTemp.innerHTML = `Temp : ${data.main.temp}`;
  windSpeed.innerHTML = `Wind speed : ${data.wind.speed}`;
  weatherDesc.innerHTML = `Weather Desc : ${data.weather[0].description}`;
  sunriseSunset.innerHTML = `Sunrise : ${data.sys.sunrise}, Sunset: ${data.sys.sunset}`;
  console.log(data);
}
