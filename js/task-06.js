const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", OnInputBlur);

function onInputBlur() {
  if (inputEl.getAttribute("data-length") > inputEl.value.length) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
