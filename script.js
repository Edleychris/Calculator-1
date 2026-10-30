function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function operate(operator, a, b) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
  return null;
}

const display = document.getElementById("display");
let displayValue = "0";
let firstNumber = null;
let chosenOperator = null;
let startNewNumber = false;
let error = false;

function updateDisplay() {
  display.textContent = displayValue;
}

function clearCalculator() {
  displayValue = "0";
  firstNumber = null;
  chosenOperator = null;
  startNewNumber = false;
  error = false;
  updateDisplay();
}

function inputNumber(number) {
  if (error) clearCalculator();
  if (startNewNumber) {
    displayValue = number;
    startNewNumber = false;
  } else if (displayValue === "0") {
    displayValue = number;
  } else if (displayValue.length < 15) {
    displayValue += number;
  }
  updateDisplay();
}

function inputDecimal() {
  if (error) clearCalculator();
  if (startNewNumber) {
    displayValue = "0.";
    startNewNumber = false;
  } else if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
}

function showError() {
  displayValue = "Nice try! No ÷ 0";
  firstNumber = null;
  chosenOperator = null;
  startNewNumber = true;
  error = true;
  updateDisplay();
}

function calculate() {
  if (chosenOperator === null || firstNumber === null || startNewNumber || error) return false;
  const secondNumber = Number(displayValue);
  if (chosenOperator === "/" && secondNumber === 0) {
    showError();
    return false;
  }
  const answer = operate(chosenOperator, firstNumber, secondNumber);
  // Limit long decimals and remove unnecessary trailing zeroes.
  displayValue = String(Number(answer.toPrecision(12)));
  firstNumber = Number(displayValue);
  updateDisplay();
  return true;
}

function chooseOperator(operator) {
  if (error) return;
  if (chosenOperator !== null && !startNewNumber) {
    if (!calculate()) return;
  }
  firstNumber = Number(displayValue);
  chosenOperator = operator;
  startNewNumber = true;
}

function equals() {
  if (calculate()) {
    chosenOperator = null;
    firstNumber = null;
    startNewNumber = true;
  }
}

function backspace() {
  if (error) { clearCalculator(); return; }
  if (startNewNumber) return;
  displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : "0";
  if (displayValue === "-") displayValue = "0";
  updateDisplay();
}

document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function () {
    const action = button.dataset.action;
    if (action === "number") inputNumber(button.dataset.value);
    else if (action === "operator") chooseOperator(button.dataset.value);
    else if (action === "decimal") inputDecimal();
    else if (action === "equals") equals();
    else if (action === "clear") clearCalculator();
    else if (action === "backspace") backspace();
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key >= "0" && key <= "9" && key.length === 1) inputNumber(key);
  else if (["+", "-", "*", "/"].includes(key)) { event.preventDefault(); chooseOperator(key); }
  else if (key === ".") inputDecimal();
  else if (key === "Enter" || key === "=") { event.preventDefault(); equals(); }
  else if (key === "Backspace") { event.preventDefault(); backspace(); }
  else if (key === "Escape" || key.toLowerCase() === "c") clearCalculator();
});