// Commander maintenant
var fisrtBloc = document.querySelector(".first-bloc");
var paragraphe = document.querySelector("#paragraphe");

var buttonCommande = document.getElementById("buttonCommande").addEventListener("click", function(event) {
    console.log("ok");
    fisrtBloc.style.display = "none";
    paragraphe.style.display = "block";
})

// Vidéo youtube
var blocImg = document.querySelector(".bloc-img");
var video = document.querySelector("#video");

var buttonMeet = document.getElementById("buttonMeet").addEventListener("click", function(event) {
    console.log("ok");
    blocImg.style.display = "none";
    video.style.display = "block";
})