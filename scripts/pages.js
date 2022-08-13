window.onload = function() {
  document.getElementById("aboutmenav").onclick = function() {
    document.getElementById("aboutme").style.color = "#FFAAFF";
    document.getElementById("contacts").style.color = "#FF69B4";
    document.getElementById("projects").style.color = "#FF69B4";
    document.getElementById("interests").style.color = "#FF69B4";

    document.getElementById("aboutmebox").style.display = "initial";
    document.getElementById("contactsbox").style.display = "none";
    document.getElementById("projectsbox").style.display = "none";
    document.getElementById("interestsbox").style.display = "none";
  }
  document.getElementById("contactsnav").onclick = function() {
    document.getElementById("aboutme").style.color = "#FF69B4";
    document.getElementById("contacts").style.color = "#FFAAFF";
    document.getElementById("projects").style.color = "#FF69B4";
    document.getElementById("interests").style.color = "#FF69B4";

    document.getElementById("aboutmebox").style.display = "none";
    document.getElementById("contactsbox").style.display = "initial";
    document.getElementById("projectsbox").style.display = "none";
    document.getElementById("interestsbox").style.display = "none";
  }
  document.getElementById("projectsnav").onclick = function() {
    document.getElementById("aboutme").style.color = "#FF69B4";
    document.getElementById("contacts").style.color = "#FF69B4";
    document.getElementById("projects").style.color = "#FFAAFF";
    document.getElementById("interests").style.color = "#FF69B4";

    document.getElementById("aboutmebox").style.display = "none";
    document.getElementById("contactsbox").style.display = "none";
    document.getElementById("projectsbox").style.display = "initial";
    document.getElementById("interestsbox").style.display = "none";
  }
  document.getElementById("interestsnav").onclick = function() {
    document.getElementById("aboutme").style.color = "#FF69B4";
    document.getElementById("contacts").style.color = "#FF69B4";
    document.getElementById("projects").style.color = "#FF69B4";
    document.getElementById("interests").style.color = "#FFAAFF";

    document.getElementById("aboutmebox").style.display = "none";
    document.getElementById("contactsbox").style.display = "none";
    document.getElementById("projectsbox").style.display = "none";
    document.getElementById("interestsbox").style.display = "initial";
  }
}

