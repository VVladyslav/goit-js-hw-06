const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    return (refs.output.textContent = "Anonimous");
  }
  refs.output.textContent = event.currentTarget.value;
});
