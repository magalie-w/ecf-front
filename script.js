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

//Menu burger
var menuBurger = document.querySelector("#menu-burger");
var lienBurger = document.querySelector(".deroulant");
// var x = document.querySelector(".x");
// var x = document.querySelector(".y");

lienBurger.style.display = "none";

var burger = document.getElementById("menu-burger").addEventListener("click", function(event) {
    if (lienBurger.style.display == "none") {
        console.log("ok");
        lienBurger.style.display = "block";

    } else {
        lienBurger.style.display = "none";
    }
})