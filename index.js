//RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label = document.getElementById("label");

const min = 0;
const max = 1000000;

let randomNum;


myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  
  label.textContent = randomNum;
};
