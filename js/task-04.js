"use strict";

const bthDecrement = document.querySelector('[data-action="decrement"]');
const bthIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const decrease = () => {
  counterValue --;
  value.textContent = counterValue;
};

const increase = () => {
  counterValue ++;
  value.textContent = counterValue;
};

bthDecrement.addEventListener('click', decrease);
bthIncrement.addEventListener('click', increase);