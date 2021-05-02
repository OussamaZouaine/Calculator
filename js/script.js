const display = document.querySelector('.results');
const numbers = document.querySelectorAll('.number');

function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}

console.log(add(5, 5));

function subtract(nbr1, nbr2) {
    return nbr1 - nbr2;
}

console.log(subtract(15, 5));

function multiply(nbr1, nbr2) {
    return nbr1 * nbr2;
}
console.log(multiply(5, 2));

function divide(nbr1, nbr2) {
    try {
        return nbr1 / nbr2;
    } catch (error) {
        alert(error);
    }
}

console.log(divide(20, 2));

function operate(operator, nbr1, nbr2) {
    if (operator === '+') {
        return add(nbr1, nbr2);
    } else if (operator === '-') {
        return subtract(nbr1, nbr2);
    } else if (operator === '*') {
        return multiply(nbr1, nbr2);
    } else if (operator === '/') {
        return divide(nbr1, nbr2);
    }
}

console.log(operate('+', 5.5, 20));

function displayNumber(e) {
    if (display.innerText === '0' && e.target.innerText === '0') {
        display.innerText = '0';
        return;
    } else if (
        display.innerText === '0' &&
        e.target.innerText !== '0' &&
        e.target.innerText !== '.'
    ) {
        display.innerText = '';
    }
    display.append(e.target.innerText);
}

numbers.forEach((number) => {
    number.addEventListener('click', displayNumber);
});
