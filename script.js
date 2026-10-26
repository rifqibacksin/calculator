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

let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;

const display = document.querySelector(".display")
function clear() {
    display.textContent = "";
    currentInput = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function displayText(input) {
    let operators = ["+", "-", "/", "x"];
    if (operators.includes(input)) {
        firstNumber = Number(display.textContent);
        operator = input;
        display.textContent = "";
        return;
    }
    else if (input == "=") {
        secondNumber = Number(display.textContent);
        console.log(secondNumber)
        console.log(firstNumber)
        display.textContent = "";
        displayText(operate(firstNumber, secondNumber, operator));
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

