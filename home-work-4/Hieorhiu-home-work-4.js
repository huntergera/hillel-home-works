'use strict';

// 1 & 2 tasks
const radius = +prompt('Введите радиус окружности');

function calculateArea(radius) {
    return Math.PI * radius ** 2
}

function calculateCircumference(radius) {
    return 2 * Math.PI * radius
}

console.log(`Площадь круга ${calculateArea(radius)}`);
console.log(`Окружность круга ${calculateCircumference(radius)}`);

// 3 task
const firstNumber = +prompt('Введите первое число');
const secondNumber = +prompt('Введите второе число');

function arithmeticMean(firstNumber, secondNumber) {
    return (firstNumber + secondNumber) / 2
}

console.log(`Среднее арифметическое ${arithmeticMean(firstNumber, secondNumber)}`);

// 4 task
const action = prompt('Введите математическое действие');

function calc(x, y, action) {
    switch (action) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
        default:
            return  "Вы ввели неверное математическое действие"
    }
}

console.log(calc(firstNumber, secondNumber, action));
