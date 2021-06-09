var containerEl = document.querySelector("container");
var appTitleEl = document.querySelector("app-title");
var notificationsEl = document.querySelector("notifications");
var weatherContainerEl = document.querySelector("weather-container");
var temperatureEl = document.querySelector("temperature");
var tempDescriptionEl = document.querySelector("temp-description");
var locationEl = document.querySelector("location");

var api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=396bf9de82cd6c7d6db52ea80429e67c`;
    fetch(api)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('');
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].name);
        }
      });
    myElement = document.getElementById("submit")
   