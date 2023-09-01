"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const newListItem = (ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
    return listItem;
};

const ingredientElements = ingredients.map(newListItem);

ingredientsList.append(...ingredientElements);

console.log(ingredientsList)