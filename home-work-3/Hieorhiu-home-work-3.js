// 1 task
let i = 10,
  resultString = i;

while (i < 20) {
    i++;
    resultString += (', ' + i);
}
console.log(resultString);

// 2 task
let resultOfSquares = '';

for (let i = 10; i <= 20; i++) {
    resultOfSquares += i ** 2 + (i !== 20 ? ', ' : '');
}
console.log(resultOfSquares);

// 3 task
console.groupCollapsed('Таблица умножения на 7');

for (let i = 0; i <= 9; i++) {
    console.log(`${i} * 7 = ${i * 7}`)
}

console.groupEnd();

// 4 task
let sumOfNumbers = 0;

for (let i = 1; i <= 15; i++) {
    sumOfNumbers += i;
}
console.log(`Сумма всех целых чисел ${sumOfNumbers}`);

// 5 task
let multiplicationOfNumbers = 1;

for (let i = 15; i <= 35; i++) {
    multiplicationOfNumbers *= i;
}
console.log(`Произведение всех целых чисел ${multiplicationOfNumbers}`);

// 6 task
let NumbersSum = 0;

for (let i = 1; i <= 500; i++) {
    NumbersSum = (NumbersSum + i);
}
console.log(`Cреднее арифметическое ${NumbersSum / 500}`);

// 7 task
let sumOfEvenNumbers = 0;

for (let i = 30; i <= 50; i++) {

    if (i % 2 === 0) {
        sumOfEvenNumbers += i;
    }
}
console.log(`Сумма только четных чисел ${sumOfEvenNumbers}`);

// 8 task
let numbersMultiplesOfThree = '';

for (let i = 100; i <= 200; i++) {

    if (i % 3 === 0) {
        numbersMultiplesOfThree += i + ', ';
    }
}
console.log(`Числа, кратные 3 - ${numbersMultiplesOfThree}`);

// 9 task
const naturalNumber = 75856;
let dividersOfNaturalNumber = '';
let sumOfEvenDividers = 0;
let quantityOfEvenDividers = 0;

for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {

        dividersOfNaturalNumber += i + ', ';

        if (i % 2 === 0) {
            sumOfEvenDividers += i;
            quantityOfEvenDividers++
        }

    }
}

console.log(`Делители натурального числа ${dividersOfNaturalNumber}`);
console.log(`Количество четных делителей ${quantityOfEvenDividers}`);
console.log(`Сумма четных делителей натурального числа ${sumOfEvenDividers}`);

// 10 task
console.groupCollapsed('Таблица умножения');

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
    }
}

console.groupEnd();

// 11 task
const maxRand = 10;
const minRand = 0;
const rand =  Math.floor(minRand + Math.random() * (maxRand + 1 - minRand));

while(true) {
    const enteredNumber = prompt("Угадайте задуманное число");

    if (+enteredNumber === rand) {
        console.log('Угадал');
        break
    }

    if (enteredNumber === null) {
        console.log('Ну что ж, продолжим в следующий раз)');
        break
    }
}