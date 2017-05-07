function WeatherController(){
  var wc = this;
  var weatherService = new WeatherService();
  weatherService.getWeather(function(weather){
    drawWeather(weather)
  })

  function drawWeather(weather){
    console.log(weather)
    var fahrenheit = weather.main.temp * (9 /5 ) - 459.67
    var f = fahrenheit.toFixed(1)
    var template = ""
    var elem = document.getElementById('weather')
      template += `
        <div>
          <div>
            <h4 onclick=""><i class="fa fa-cloud" aria-hidden="true" <style></i> ${f}°</h4>
            <p class="city-name">${weather.name}</p>
          </div>
        </div>
      `
  elem.innerHTML = template
}

  this.changeWeather = function changeWeather(){
    debugger
    weatherService.changeWeather()
  }

}

