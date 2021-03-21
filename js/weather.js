const iconElement = document.querySelector(".weather-icon"),
      tempElement = document.querySelector(".temperature-value p"),
      descElement = document.querySelector(".temperature-description p"),
      locationElement = document.querySelector(".location p"),
      notificationElement = document.querySelector(".notification");

const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273,
      KEY ="31a4baf95b4cb4758ed0067e8600cfa9";

      if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{
        notificationElement.style.display = "block";
        notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
    }

    function displayWeather(){
        iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        descElement.innerHTML = weather.description;
        locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    }

function cToF (temperature) {
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function(){
    
    if(weather.temperature.value === undefined) return;
    if(weather.temperature.unit === "celsius"){
        let fahrenheit = cToF(weather.temperature.value);

        fahrenheit = Math.floor(fahrenheit);
        tempElement.innerHTML = `${fahrenheit}° <span>F</span>`;

        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value} °<span>C</span>`;

        weather.temperature.unit = "celsius";
    }

});

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML=`Can't access geolocation`;

}

function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
    fetch(api).then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
} 
