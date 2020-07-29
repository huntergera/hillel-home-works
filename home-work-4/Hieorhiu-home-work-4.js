'use strict';

// 1 & 2 tasks
const radius = +prompt('Введите радиус окружности');
const errorMessage = 'Вы ввели неверное число';

function isNumber(number) {
    return !Number.isNaN(number);
}

function calculateArea(radius) {
    return isNumber(radius)
      ? `Площадь круга ${Math.PI * radius ** 2}`
      : errorMessage;
}

function calculateCircumference(radius) {
    return isNumber(radius)
      ? `Окружность круга ${2 * Math.PI * radius}`
      : errorMessage;
}

console.log(calculateArea(radius));
console.log(calculateCircumference(radius));


// Второй вариант решения задачи, попробовал использовать колбек-функцию, работает, но не уверен что так можно писать

// function showResult(radius, calculating) {
//     return Number.isNaN(radius) ? 'Вы ввели неверный радиус' : calculating;
// }
//
// function calculateArea(radius) {
//     return Math.PI * radius**2;
// };
//
// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
// }
//
// console.log(showResult(radius, calculateArea(radius)));
// console.log(showResult(radius, calculateCircumference(radius)));


// 3 task
const firstNumber = +prompt('Введите первое число');
const secondNumber = +prompt('Введите второе число');

function arithmeticMean(firstNumber, secondNumber) {
    return isNumber(firstNumber) && isNumber(secondNumber)
      ? `Среднее арифметическое ${(firstNumber + secondNumber) / 2}`
      : errorMessage;
}

console.log(arithmeticMean(firstNumber, secondNumber));

// 4 task
const action = '/';

let calc = new Function(
  'firstNumber , secondNumber , action',
  `return ${firstNumber} ${action} ${secondNumber}`,
);

console.log(calc(firstNumber, secondNumber, action));