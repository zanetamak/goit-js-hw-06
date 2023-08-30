'use strict';


const registerForm = document.querySelector(".login-form");

function registerForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log('All fields should be filled in');
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  form.reset();
}