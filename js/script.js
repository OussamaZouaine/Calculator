// DOM
const display = document.querySelector('.results');
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('.clear-btn');
const remove = document.querySelector('.delete-btn');
let displayedValue = '';
let operator = null;
let firstNumber = null;
let secondNumber = null;
let result = null;
let operatorCounter = 0;
let equalCounter = 0;
let isOperandCLicked = false;
let equalClicked = false;
let pointCLicked = 0;

// operations
function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}

function subtract(nbr1, nbr2) {
    return nbr1 - nbr2;
}

function multiply(nbr1, nbr2) {
    return nbr1 * nbr2;
}

function divide(nbr1, nbr2) {
    if (nbr2 === 0) {
        alert("Sorry you can't divide by 0!");
        return '0';
    }

    return nbr1 / nbr2;
}

function modulo(nbr1, nbr2) {
    return nbr1 % nbr2;
}

// Functions
function operate(operator, nbr1, nbr2) {
    if (operator === '+') {
        return add(nbr1, nbr2);
    } else if (operator === '-') {
        return subtract(nbr1, nbr2);
    } else if (operator === '*') {
        return multiply(nbr1, nbr2);
    } else if (operator === '/') {
        return divide(nbr1, nbr2);
    } else if (operator === '%') {
        return modulo(nbr1, nbr2);
    }
}

// display.addEventListener('DOMSubtreeModified', () => {
//     let currentValue = display.innerText;
//     currentValue = currentValue.replace(/\./g, '');
//     display.innerText = currentValue;
// });

function displayNumber(e) {
    if (e.target.innerText === '.') {
        pointCLicked++;
        if (pointCLicked > 1) {
            return;
        }
    }

    if (display.innerText === '0' && e.target.innerText === '0') {
        display.innerText = '0';
        return;
    } else if (isOperandCLicked) {
        display.innerText = '';
        isOperandCLicked = false;
    } else if (
        display.innerText === '0' &&
        e.target.innerText !== '0' &&
        e.target.innerText !== '.'
    ) {
        display.innerText = '';
    }
    display.append(e.target.innerText);
    displayedValue = display.innerText;
    // console.log(displayedValue);
}

function operation(e) {
    operatorCounter++; // to keep track on how many time an operand clicked
    isOperandCLicked = true;

    if (operatorCounter > 1) {
        secondNumber = parseFloat(display.innerText);
        result = operate(operator, firstNumber, secondNumber);
        display.innerText = result;
        operator = e.target.innerText;
        firstNumber = result;
        pointCLicked = 0;
    } else {
        firstNumber = parseFloat(display.innerText);
        operator = e.target.innerText;
        pointCLicked = 0;
    }

    // console.log(firstNumber);
    // console.log(secondNumber);
}

function results(e) {
    if (firstNumber !== null) {
        equalCounter++;
        if (equalCounter <= 1) {
            secondNumber = parseFloat(display.innerText);
            result = operate(operator, firstNumber, secondNumber);
            display.innerText = result;
            firstNumber = result;
            operatorCounter = 0;
            isOperandCLicked = true;
        }
    }
}

function initialize() {
    display.innerText = '0';
    firstNumber = null;
    secondNumber = null;
    result = null;
    operatorCounter = 0;
    equalCounter = 0;
    isOperandCLicked = false;
    pointCLicked = 0;
}

function removeStep() {
    if (display.innerText === '0' || display.innerText === '') {
        return;
    }

    let currentValue = display.innerText;
    // console.log(typeof currentValue);
    currentValue = currentValue.split('');
    currentValue.pop();
    let finalValue = currentValue.join('');
    // console.log(finalValue);
    display.innerText = finalValue;

    if (display.innerText === '') {
        display.innerText = 0;
    }
}

// Event listeners
numbers.forEach((number) => {
    number.addEventListener('click', displayNumber);
});

operands.forEach((operand) => {
    operand.addEventListener('click', operation);
});

equal.addEventListener('click', results);

clear.addEventListener('click', initialize);

remove.addEventListener('click', removeStep);
