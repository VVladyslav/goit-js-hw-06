const changeColorButton = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
let color = document.querySelector(".color");
changeColorButton.addEventListener("click", changeColorHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColorHandler() {
  color.textContent = getRandomHexColor();
  widget.style.backgroundColor = color.textContent;
}
