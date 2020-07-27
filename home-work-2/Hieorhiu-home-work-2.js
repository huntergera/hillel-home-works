// 1 task
const userName = prompt('Как тебя зовут?' ),
      userBirthYear = +prompt('Какого ты года рождения?'),
      currentDate = new Date(),
      userAge = currentDate.getFullYear() - userBirthYear;

let promptNumbers = [];

if(Number.isNaN(userBirthYear)) {
    alert('Вы ввели неверный год рождения');
} else {
    alert(`${userName} ${userAge}`);
}

// 2 task
promptNumbers[0] = +prompt('Введите первое число' );
promptNumbers[1] = +prompt('Введите второе число' );
promptNumbers[2] = +prompt('Введите третье число' );
const additionResult = promptNumbers[0] + promptNumbers[1] + promptNumbers[2];

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
const averageNumber = additionResult / promptNumbers.length;
console.log(`Среднее арифметическое = ${+averageNumber.toFixed(2)}`);

// 4 task
let bigNumber = 12345;

const arr = bigNumber.toString().split('').reverse().join(' ');
console.log(arr);

  // Второй вариант
const firstNumber = bigNumber % 10;
bigNumber = (bigNumber - firstNumber) / 10;

const secondNumber = (bigNumber % 10);
bigNumber = (bigNumber - secondNumber) / 10;

const thirdNumber = (bigNumber % 10);
bigNumber = (bigNumber - thirdNumber) / 10;

const fourthNumber = (bigNumber % 10);
bigNumber = (bigNumber - fourthNumber) / 10;

const fifthNumber = (bigNumber % 10);
bigNumber = (bigNumber - fifthNumber) / 10;

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);


// 5 task
if(promptNumbers[0] > promptNumbers[1]){
  console.log(`${promptNumbers[0]} > ${promptNumbers[1]}`);
} else if(promptNumbers[0] < promptNumbers[1]) {
  console.log(`${promptNumbers[0]} < ${promptNumbers[1]}`);
} else {
  console.log(`${promptNumbers[0]} = ${promptNumbers[1]}`);
}

// 6 task
const randomNumber = 4567855,
      lastNumber = randomNumber % 10;
const lastNumberIsEven =  lastNumber % 2 === 0 ? `Цифра ${lastNumber} четная` : `Цифра ${lastNumber} нечетная`;
console.log(lastNumberIsEven);

// 7 task
const currentUserName = prompt('Как тебя зовут?' ),
      currentUserAge = +prompt('Сколько вам лет?' ),
      alcoholDrinking = confirm("Алкоголь употребляем?");

if(alcoholDrinking === true) {
  if(currentUserAge > 40) {
    alert(`${currentUserName}, не злоупотребляйте`)
  } else if(currentUserAge < 18) {
    alert(`${currentUserName}, ты что?! Маме расскажу!`)
  } else {
    alert(`${currentUserName}, только водку с пивом не мешай...`)
  }
} else {
  alert(`${currentUserName}, так держать!`)
}