function ClockController() {
  var clockService = new ClockService();

    // Get actualy clock function to rerun on setTimeOut, currently not working
    function clock() {
    var time = new Date()
    var hr = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var ampm = " PM "
    if (hr < 12) {
      ampm = " AM "
    }
    if (hr > 12) {
      hr -= 12
    }
    // if (hr < 10) {
    //   hr = " " + hr
    // }
    if (min < 10) {
      min = "0" + min
    }
    if (sec < 10) {
      sec = "0" + sec
    }
    document.getElementById('clock').innerHTML = `<p class="clock-time">${hr} : ${min}</p> <pclass="am-or-pm">${ampm}</p>
    `
    setTimeout(clock, 1000)
    name(hr, min, ampm)
  }
  window.onload = clock;

  function name(hr, min, ampm){

    var greeting = '';
    if(hr >= 5 && hr < 12 && ampm == ' AM '){
      greeting = 'Morning'
    }else if(hr < 5 && ampm == ' PM '){
      greeting = 'Afternoon'
    }else{
      greeting = 'Evening'
    }

    var template = "";
    var elem = document.getElementById('hello')
    template +=`
      <p>Good ${greeting}, Nathan.</p>
    `
    elem.innerHTML = template
  }

  // Make name dynamic from what time it is, change greeting to reflect the time of the day (Morning(12:01-11.59), Afternoon(12:00-4:59), Evening(5:00-11:59))

}