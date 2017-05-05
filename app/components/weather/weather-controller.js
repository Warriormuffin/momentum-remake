function WeatherController(){
  var wc = this;
  var weatherService = new WeatherService;

  weatherService.getWeather(function(weather){
    drawWeather(weather)
  })

  function drawWeather(weather){
    console.log(weather)
    var f = weather.main.temp * (9 /5 ) - 459.67
    var template = ""
    var elem = document.getElementById('weather')
      template += `
        <div>
          <div>
            <p>${weather.name}</p>
            <p>${weather.weather[0].description}</p>
            <p>${f}</p>
          </div>
        </div>
      `
  elem.innerHTML = template
  }

}

