function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(number1, number2, operator) {
    if (number1 === undefined || number2 === undefined || operator === undefined) {
        return currentInput;
    }
    switch (operator) {
        case "+":
            return add(number1, number2)
        case "-":
            return subtract(number1, number2)
        case "x":
            return multiply(number1, number2)
        case "/":
            return divide(number1, number2)
    }
}

let currentInput = null;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let resultDone = false;
let resetCalculator = true; 

const display = document.querySelector(".display")
function clear() {
    display.textContent = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    resetCalculator = true; 
}

function displayText(input) {

    if (resetCalculator) {
        display.textContent = "";
        resetCalculator = false;
    }

    let operators = ["+", "-", "/", "x"];
    if (input == "%") {
        if (!firstNumber) {
            firstNumber = (Number(display.textContent) / 100);
        }
        else {
            secondNumber = Number(display.textContent) / 100
        }
    }
    else if (operators.includes(input)) {
        if (!firstNumber) {
            firstNumber = Number(display.textContent);
        }
        operator = input;
        display.textContent = "";
        return;
    }
    else if (input == "=") {
        if (!secondNumber) {
            secondNumber = Number(display.textContent);
        }

        display.textContent = "";
        displayText(operate(firstNumber, secondNumber, operator));
        resultDone = true;
        resetCalculator = true; 
        return;
    }

    let text = display.textContent;
    display.textContent = text + input;
}

function deleteText() {
    let text = display.textContent
    display.textContent = text.slice(0, -1)
}

const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (event) => {
    event.preventDefault;
    let target = event.target;

    if (resultDone) {
        clear();
        resultDone = false;
    }

    switch (target.id) {
        case "clear": {
            clear();
            return;
        }
        case "point": {
            displayText(".")
            return;
        }
        case "delete": {
            deleteText();
            return;
        }
    }
    if (target.matches("button")) {
        displayText(target.id)
    }
})

