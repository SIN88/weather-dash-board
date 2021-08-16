const searchBtn= document.getElementById("searchBtn");
const searchNow= document.getElementById("search");
const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=396bf9de82cd6c7d6db52ea80429e67c`;
  

function getWeather() {
  const cityName = searchNow.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIkey}`).then(function(res){return res.json()}).then(function(data){
      console.log(data)
      const title=document.getElementById("forecast-title");
      title.textContent=data.name
      addCityList(cityName)
      const lat= data.coord.lat
      const lon= data.coord.lon
      fiveDayForeCast(lat,lon);
  })
}