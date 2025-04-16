let calculation = localStorage.getItem("calculation") || "";
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem("calculation", calculation);
  calculationDisplay();
}

function saveCalculation() {
  calculationDisplay();
  localStorage.setItem("calculation", calculation);
}

function calculationDisplay() {
  document.querySelector(".js-calculation-display").textContent =
    calculation;
}