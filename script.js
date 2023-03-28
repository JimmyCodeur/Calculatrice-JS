const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;
let previousValues = "";

function calculate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch(operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return display.textContent = value;
  }
}

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const value = button.getAttribute("value");
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      // Si l'utilisateur a cliqué sur un opérateur
      operator = value;
      firstNumber = display.textContent;
      previousValues += `${firstNumber} ${operator} `;
      display.textContent = "";
    } else if (value === "=") {
      // Si l'utilisateur a cliqué sur le bouton "="
      secondNumber = display.textContent;
      result = calculate(operator, firstNumber, secondNumber);
      display.textContent = result;
      previousValues = `${previousValues}${secondNumber} = ${result}`;
    } else if (value === "C") {
      // Si l'utilisateur a cliqué sur le bouton "C"
      display.textContent = "0";
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = 0;
      previousValues = "";
    } else if (value === "CE") {
        // Si l'utilisateur a cliqué sur le bouton "CE"
        display.textContent = display.textContent.slice(0, -1);
        
    } else if (value === "%") {
      // Si l'utilisateur a cliqué sur le bouton "%"
      display.textContent = parseFloat(display.textContent) / 100;
    } else {
      // Si l'utilisateur a cliqué sur un chiffre ou un point décimal
      if (display.textContent === "0") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
    if (previousValues !== "") {
      document.getElementById("previousValues").textContent = previousValues;
    }
  });
});
