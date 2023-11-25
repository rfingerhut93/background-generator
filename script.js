var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random-btn");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function getRandomColors() {
    randColor1 = Math.floor(Math.random()*16777215).toString(16);
    randColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + randColor1;
    color2.value = "#" + randColor2;
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomColors);
