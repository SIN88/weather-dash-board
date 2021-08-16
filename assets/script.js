const searchBtn= document.getElementById("searchBtn");
const searchNow= document.getElementById("search");
const api = "396bf9de82cd6c7d6db52ea80429e67c"
const cityList =  document.getElementById("citylist");
  

function getWeather() {
  const cityName = searchNow.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${api}`).then(function(res){return res.json()}).then(function(data){
      console.log(data)
      const title=document.getElementById("forecast-title");
      title.textContent=data.name
      //addCityList(cityName)
      
      const lat= data.coord.lat
      const lon= data.coord.lon
     
      fiveDayForeCast(lat,lon);
  })
}

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  getWeather();
})

function fiveDayForeCast(lat,lon) {
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts&appid=396bf9de82cd6c7d6db52ea80429e67c ")
  .then(function(res){return res.json()}).then(function(data) {
        
      displayWeather(data.innerHTML); 
      forecast(data.daily);

  })
}

function forecast(daily) {
 
  
  const day1Temp= document.getElementById("day1Temp")
  day1Temp.textContent=daily[0].temp.day
  const day1Humidity= document.getElementById("day1Humidity")
  day1Humidity.textContent=daily[0].humidity
  const day2Temp= document.getElementById("day2Temp")
  day2Temp.textContent=daily[1].temp.day
  const day2Humidity= document.getElementById("day2Humidity")
  day2Humidity.textContent=daily[1].humidity
  const day3Temp= document.getElementById("day3Temp")
  day3Temp.textContent=daily[2].temp.day
  const day3Humidity= document.getElementById("day3Humidity")
  day3Humidity.textContent=daily[2].humidity
  const day4Temp= document.getElementById("day4Temp")
  day4Temp.textContent=daily[3].temp.day
  const day4Humidity= document.getElementById("day4Humidity")
  day4Humidity.textContent=daily[3].humidity
  const day5Temp= document.getElementById("day5Temp")
  day5Temp.textContent=daily[4].temp.day
  const day5Humidity= document.getElementById("day5Humidity")
  day5Humidity.textContent=daily[4].humidity


}
//
//function addCityList(city) {
  //cityList = city.charAt(0).toUpperCase() + city.slice(1)
  //if(!cityList.includes(cityCap)) {
    //  cityList.unshift(cityCap);
      //localStorage.setItem("cityList", JSON.stringify(cityList));

  //}
 //searchHistory();
//}

//const historyList= document.getElementById("searchHistory");

function searchHistory() {
  const historyList= document.getElementById("searchHistory");

  historyList.innerHTML="";
  for (let i=0; i<cityList.length; i++) {
      console.log(cityList[i]);
      const card = document.createElement("div");
      card.textContent= cityList[i];
      historyList.appendChild(card);
  }
}

function displayWeather(data){
  
  const temperature= document.getElementById("temperature");
  temperature.textContent=data.current.temp;
  const humidity= document.getElementById("humidity");
  humidity.textContent=data.current.humidity;
  const windSpeed= document.getElementById("windSpeed");
  windSpeed.textContent=data.current.wind_speed;
  const uvIndex= document.getElementById("uvIndex");
  uvIndex.textContent=data.current.uvi;






}