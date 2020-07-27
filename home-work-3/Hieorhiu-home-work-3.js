// 1 task
let i = 10,
    resultString = i;
while (i < 20) {
    i++;
    resultString += (', ' + i);
}
console.log(resultString);

// 2 task
let resultOfSquares = '',
    from = 10,
    to = 20;
for(let i = from;i <= to; i++) {
  resultOfSquares += i**2 + (i !== to ? ', ' : '');
}
console.log(resultOfSquares);

// 3 task
for(let i = 0; i <=9; i++) {
    console.log(`${i} * 7 = ${i * 7}`)
}

// 4 task
let sumOfNumbers = 0;

for(i = 1; i <= 15; i++) {
    sumOfNumbers += i;
}
console.log(`Сумма всех целых чисел ${sumOfNumbers}`);

// 5 task
let multiplicationOfNumbers = 1;

for(i = 15; i <= 35; i++) {
    multiplicationOfNumbers *= i;
}
console.log(`Произведение всех целых чисел ${multiplicationOfNumbers}`);


// 6 task
let NumbersSum = 0;
for(i = 1; i <= 500; i++) {
    NumbersSum = (NumbersSum +  i);
}
console.log(NumbersSum / 500);

// 7 task

