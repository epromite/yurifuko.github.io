function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var mytz = new Date().toLocaleString([], { timeZone: "Europe/Prague" });
    var now = new Date(mytz);
  
    var h = now.getHours();
    var m = now.getMinutes();

    var isFormat12H = false;
    var ampm = "";
    if (isFormat12H) {
      ampm = h >= 12 ? " PM" : " AM";
      h = h % 12;
      h = h ? h : 12;
    }
    m = checkTime(m);

    document.getElementById("time").innerHTML = h + ":" + m + ampm;
    t = setTimeout(function () {
      startTime();
    }, 1000);
  }
  startTime();