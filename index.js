const apiKey="7586c5aaa748989f2e567cb4e2875585";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=kanpur";
const searchbox=document.querySelector(".Search input");
const searchbtn=document.querySelector(".Search button");
const weatherIcon = document.querySelector(".weather1");
async function checkWeather(city) {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
   if (response.status === 404) {
       document.querySelector(".error").style.display = "block";
       document.querySelector(".error").innerHTML = "City not found. Please enter a valid city name.";
       document.querySelector(".weather").style.display = "none";
   } else {
       var data = await response.json();
       console.log(data);
       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = data.main.temp + "°C";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
       if (data.weather[0].main == "Clouds") {
           weatherIcon.src = "clouds.png";
       } else if (data.weather[0].main == "Clear") {
           weatherIcon.src = "clear.png";
       } else if (data.weather[0].main == "Rain") {
           weatherIcon.src = "rain.png";
       } else if (data.weather[0].main == "Mist") {
           weatherIcon.src = "mist.png";
       } else if (data.weather[0].main == "Drizzle") {
           weatherIcon.src = "drizzle.png";
       }
       document.querySelector(".weather").style.display = "block";
       document.querySelector(".error").style.display = "none"; // Ensure error message is hidden if previous request resulted in error
   }
}

searchbtn.addEventListener("click",()=>{
checkWeather(searchbox.value);
})
;