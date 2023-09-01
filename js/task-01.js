"use strict";

const categories = document.querySelector('#categories');
const newItems = categories.querySelectorAll('.item');

console.log('Number of categories:', newItems.length);

newItems.forEach((item) => {
  const categoryName = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');

  console.log('Category:', categoryName);
  console.log('Elements:', elements.length);
});