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

for(let i = 10;i <= 20; i++) {
  resultOfSquares += i**2 + (i !== 20 ? ', ' : '');
}
console.log(resultOfSquares);

// 3 task
for(let i = 0; i <=9; i++) {
    console.log(`${i} * 7 = ${i * 7}`)
}

// 4 task
let sumOfNumbers = 0;

for(let i = 1; i <= 15; i++) {
    sumOfNumbers += i;
}
console.log(`Сумма всех целых чисел ${sumOfNumbers}`);

// 5 task
let multiplicationOfNumbers = 1;

for(let i = 15; i <= 35; i++) {
    multiplicationOfNumbers *= i;
}
console.log(`Произведение всех целых чисел ${multiplicationOfNumbers}`);

// 6 task
let NumbersSum = 0;

for(let i = 1; i <= 500; i++) {
    NumbersSum = (NumbersSum + i);
}
console.log(`Cреднее арифметическое ${NumbersSum / 500}`);

// 7 task
let sumOfEvenNumbers = 0;

for(let i = 30; i <= 50; i++) {

    if(i % 2 === 0) {
        sumOfEvenNumbers += i;
        continue;
    }
}
console.log(`Сумма только четных чисел ${sumOfEvenNumbers}`);

//8 task
