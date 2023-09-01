
'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('Please fill in all the fields');
  } else {
    const data = {
      email,
      password,
    };
    console.log(data);
    form.reset();
  }
}