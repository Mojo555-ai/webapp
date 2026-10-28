console.log("linked")

const button = document.getElementById("myButton");
const resetButton = document.getElementById("resetButton");

const originalColor = window.getComputedStyle(document.body).backgroundColor;

button.addEventListener("click", () => {
  const colors = "#9c4646";
  document.body.style.backgroundColor = colors;
});

resetButton.addEventListener("click", () => { 
  document.body.style.backgroundColor = originalColor;
});

const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "#36845a";
});

  hoverText.addEventListener("mouseout", () => {
  hoverText.style.backgroundColor = "black";
  });

const textInput = document.getElementById("textInput");
const liveOutput = document.getElementById("liveOutput");

textInput.addEventListener("input", () => {
  liveOutput.textContent = textInput.value;
});

const mouseOutTarget = document.getElementById("mouseOutTarget");

mouseOutTarget.addEventListener("mouseout", () => {
    mouseOutTarget.textContent = "You Left!";
    mouseOutTarget.style.color = "#611414";
});
