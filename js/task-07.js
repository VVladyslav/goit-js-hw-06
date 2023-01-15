const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");
input.addEventListener("input", textSizeHandler);

function textSizeHandler(event) {
  const range = event.currentTarget.value;
  output.style.fontSize = `${range}px`;
}
