let counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});