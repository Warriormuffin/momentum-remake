function WeatherService() {
  var url = '//bcw-getter.herokuapp.com/?url=';
  var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
  var apiUrl = url + encodeURIComponent(url2);

  this.getWeather = function (callWhenDone) {
    // var w = localStorage.getItem('weather');
    // if (w) {
    //   w = JSON.parse(w);
    //   console.log('Weather Data', w)
    //   return callWhenDone(w)
    // }

    $.get(apiUrl, function (res) {
      res = JSON.parse(res)
      // localStorage.setItem('weather', JSON.stringify(res))
      callWhenDone(res)
    })
  }

//  function changeWeather(res){
//    debugger
//    var fahrenheit = weather.main.temp * (9 /5 ) - 459.67
//    var f = fahrenheit.toFixed(1)
//    var celcius = weather.main.temp - 273.15
//    var c = celcius.toFixed(1)
//  }
}



