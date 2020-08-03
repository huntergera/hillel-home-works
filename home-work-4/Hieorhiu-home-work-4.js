'use strict';

// 1 & 2 tasks
const radius = +prompt('Введите радиус окружности');
// const errorMessage = 'Вы ввели неверное число';

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
// const action = '/';
// +, -, *, /, %, ^

function mathematicalResult(action, firstNumber, secondNumber) {
    switch (action) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        case '%':
            return firstNumber % secondNumber;
        case '^':
            return firstNumber ** secondNumber;
        default:
            console.log( "Нет таких значений" );
    }
}

console.log(mathematicalResult(action, firstNumber, secondNumber));

//
//
// let calc = new Function(
//   'firstNumber , secondNumber , action',
//   `return ${firstNumber} ${action} ${secondNumber}`,
// );
//
// console.log(calc(firstNumber, secondNumber, action));