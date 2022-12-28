function startTime() {
  var mytz = new Date().toLocaleString([], { timeZone: "Europe/Prague" });
  var now = new Date(mytz);
  var h = now.getHours();
  var m = now.getMinutes();
  m = (m < 10 ? "0" : "") + m;
  document.getElementById("time").innerHTML = h + ":" + m;
  setTimeout(startTime, 1000);
}
startTime();