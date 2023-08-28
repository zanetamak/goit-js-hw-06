"use strict";

    const btnDecrement = document.querySelector('[data-action="decrement"]');
    const btnIncrement = document.querySelector('[data-action="increment"]');
    const value = document.querySelector("#value");

    let counterValue = 0;

    // aktualizacja widoku
    const updateView = () => {
      value.innerHTML = counterValue;
    };

function increase() {
      counterValue ++;
      updateView();
    };

 function decrease() {
      counterValue --;
      updateView();
    };

    // wywoływanie funkcji, która zmienia wyświetlane wartości

    btnDecrement.addEventListener("click", decrease);
    btnIncrement.addEventListener("click", increase);

    // Inicjalizacja widoku
    updateView();