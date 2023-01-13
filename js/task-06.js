const input = document.querySelector("#validation-input");
input.addEventListener("blur", inputTextHandler);

function inputTextHandler(ivent) {
  const inputLength = ivent.currentTarget.value.length;
  const inputValidLengt = input.getAttribute("data-length");
  if (Number(inputLength) === Number(inputValidLengt)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
