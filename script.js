function drawNumbers() {
  const numberMin = Math.ceil(document.querySelector("#numberMin").value);
  const numberMax = Math.floor(document.querySelector("#numberMax").value);

  const result =
    Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;

  document.querySelector("#result").value = result;
}
