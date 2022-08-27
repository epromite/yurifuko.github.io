window.onload = function() {
  document.getElementById("homenav").onclick = function() {
    document.getElementById("home").style.color = "#FFAAFF";
    document.getElementById("projects").style.color = "#FF69B4";
    document.getElementById("interests").style.color = "#FF69B4";

    document.getElementById("homebox").style.display = "initial";
    document.getElementById("projectsbox").style.display = "none";
    document.getElementById("interestsbox").style.display = "none";
  }
  document.getElementById("projectsnav").onclick = function() {
    document.getElementById("home").style.color = "#FF69B4";
    document.getElementById("projects").style.color = "#FFAAFF";
    document.getElementById("interests").style.color = "#FF69B4";

    document.getElementById("homebox").style.display = "none";
    document.getElementById("projectsbox").style.display = "initial";
    document.getElementById("interestsbox").style.display = "none";
  }
  document.getElementById("interestsnav").onclick = function() {
    document.getElementById("home").style.color = "#FF69B4";
    document.getElementById("projects").style.color = "#FF69B4";
    document.getElementById("interests").style.color = "#FFAAFF";

    document.getElementById("homebox").style.display = "none";
    document.getElementById("projectsbox").style.display = "none";
    document.getElementById("interestsbox").style.display = "initial";
  }
}

