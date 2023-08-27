"use strict";

//pobieram listę kategorii z html 
const categoriesList = document.querySelectorAll("#categories li.item");

//zliczam ile tych kategorii jest
const numberofCategories = categoriesList.length;

console.log(`Number of categories: ${numberofCategories}`);

categoriesList.forEach((category) => {
    const categoryTitle = category.querySelectorAll("h2");
    const categoryItem = categoryTitle.textContent;

    const itemList = category.querySelectorAll("ul li")
    const itemQuantity = itemList.length;
})