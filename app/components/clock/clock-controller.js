function ClockController() {
  var clockService = new ClockService();
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
    if (hr < 10) {
      hr = " " + hr
    }
    if (min < 10) {
      min = "0" + min
    }
    if (sec < 10) {
      sec = "0" + sec
    }
    document.getElementById('clock').innerHTML = `<p class="clock-time">${hr} : ${min}  ${ampm}</p>`
    setTimeout("clockService()", 1000)
  }
  window.onload = clock;

}