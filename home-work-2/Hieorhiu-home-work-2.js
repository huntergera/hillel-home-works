// 1 task
let userName = prompt('Как тебя зовут?' ),
    userBirthYear = +prompt('Какого ты года рождения?'),
    currentDate = new Date(),
    userAge = currentDate.getFullYear() - userBirthYear,
    promptNumbers = [];

if(Number.isNaN(userBirthYear)) {
    alert('Введите верный год рождения');
} else {
    alert(`${userName} ${userAge}`);
}

// 2 task
promptNumbers[0] = +prompt('Введите первое число' );
promptNumbers[1] = +prompt('Введите второе число' );
promptNumbers[2] = +prompt('Введите третье число' );
let additionResult = promptNumbers[0] + promptNumbers[1] + promptNumbers[2];

console.log(`Сумма трех чисел = ${additionResult}`);

function isEven(number) {
    return number % 2 === 0 ? `Число ${number} четное` : `Число ${number} нечетное`
}

console.log( `
  ${isEven(promptNumbers[0])}
  ${isEven(promptNumbers[1])}
  ${isEven(promptNumbers[2])}
`);

// 3 task
let averageNumber = additionResult / promptNumbers.length;
console.log(`Среднее арифметическое = ${+averageNumber.toFixed(2)}`);

// 4 task
let bigNumber = 12345;
let arr = bigNumber.toString().split('').join(' ');
console.log(arr, typeof arr);

// 5 task
