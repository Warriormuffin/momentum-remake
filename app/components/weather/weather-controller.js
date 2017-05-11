function WeatherController() {
  var wc = this;
  var weatherService = new WeatherService();
  weatherService.getWeather(function (weather) {
    drawWeather(weather)
  })

  function drawWeather(weather) {
    debugger
    console.log(weather)
    var fahrenheit = weather.main.temp * (9 / 5) - 459.67
    var f = fahrenheit.toFixed(0)
    var template = ""
    var elem = document.getElementById('weather')
    template += `
        <div>
          <div>
            <h4 onclick="app.controllers.weatherController.changeWeather(this)"><img class="weather-icon" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">${f}F</h4>
            <p class="city-name">${weather.name}</p>
          </div>
        </div>
      `
    elem.innerHTML = template
  }

  this.changeWeather = function changeWeather(weather) {
    var nw = weather.outerText.split('')
    for (var i = 0; i < nw.length; i++) {
      var letter = nw[i];
      if (letter == "F") {
        weatherService.getWeather(function (weather) {
          weatherService.changeWeatherToC(weather)
        })

      } else if(letter == "C") {
        weatherService.getWeather(function(weather){
          weatherService.changeWeatherToF(weather)
        })
      }

    }

  }

  this.reDrawWeatherToF = function reDrawWeatherToF(temp) {
    var f = "F"
    weatherService.getWeather(function (weather) {
      var template = ""
      var elem = document.getElementById('weather')
      template += `
        <div>
          <div>
            <h4 onclick="app.controllers.weatherController.changeWeather(this)"><img class="weather-icon" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">${temp} ${f}</h4>
            <p class="city-name">${weather.name}</p>
          </div>
        </div>
      `
      elem.innerHTML = template
    })

  }

  this.reDrawWeatherToC = function reDrawWeatherToC(temp) {
    var c = "C"
    weatherService.getWeather(function (weather) {
      var template = ""
      var elem = document.getElementById('weather')
      template += `
        <div>
          <div>
            <h4 onclick="app.controllers.weatherController.changeWeather(this)"><img class="weather-icon" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">${temp} ${c}</h4>
            <p class="city-name">${weather.name}</p>
          </div>
        </div>
      `
      elem.innerHTML = template
    })

  }






}

