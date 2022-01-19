console.log("Hello World!");

// Add Hello World as text to all h2 elements
let h2s = document.getElementsByTagName("h2"); // returns an HTMLCollection

console.log(h2s);

for (let element of h2s) {
  element.textContent = "Hello World";
  element.addEventListener("click", function (event) {
    element.textContent = "You clicked me!";
  });
  element.addEventListener("click", function (event) {
    console.log("CLICKED an h2");
  });
}

let a = document.createElement("a");
a.href = "https://google.com";
a.target = "_blank";
a.textContent = "Google Search";

let main = document.getElementById("main");
let h1s = document.getElementsByTagName("h1"); // returns an HTMLCollection

// main.removeChild(h1s[0]);

let container = document.getElementById("container");
let box = document.getElementById("box");

let posX = 0;

function moveLeft() {
  posX++;
  box.style.left = posX + "px";
  if (posX == 175) {
    clearInterval(animation);
  }
}

let animation = setInterval(moveLeft, 10);

let input = document.getElementById("input");
