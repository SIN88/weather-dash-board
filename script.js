var containerEl = document.querySelector("container");
var appTitleEl = document.querySelector("app-title");
var notificationsEl = document.querySelector("notifications");
var weatherContainerEl = document.querySelector("weather-container");
var temperatureEl = document.querySelector("temperature");
var tempDescriptionEl = document.querySelector("temp-description");
var locationEl = document.querySelector("location");
//this api was taken from a previous activity just changed the api keywhich my key is 396bf9de82cd6c7d6db52ea80429e67c i added this after app id =
var endpoint = `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=396bf9de82cd6c7d6db52ea80429e67c&units=imperial`;
    fetch(endpoint)

    myElement = document.getElementById("submit")
   