"use strict";

const backgroundColored = document.querySelector('body');
const textSpan = document.querySelector('.color');
const bthChangeColor = document.querySelector('.change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  let currentColor = getRandomHexColor();
  backgroundColored.style.backgroundColor = currentColor;
  textSpan.textContent = currentColor;
};
bthChangeColor.addEventListener('click', changeColor);
  


