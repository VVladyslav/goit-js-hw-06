const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler (event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === '' || password === '') {
    alert(`Заповніть, будь ласка, всі поля!`)
  }
  form.reset();
  console.log(formData);
}
