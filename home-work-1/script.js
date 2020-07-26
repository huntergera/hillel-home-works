// Variables
const start = Date.now();
const consoleStyle = [
    "background: #244c8e",
    "color: #fff",
    "padding: 20px",
    "line-height: 30px"
];
const regularExpression = /^\d+$/;
let firstNumber = prompt('Введите число' ),
  secondNumber = prompt('Введите еще одно число' ),
  errorMsg = "Вы ввели неверные данные";
const testString = regularExpression.test(firstNumber) && regularExpression.test(secondNumber);

// First example
console.log("========= First example =========");
console.log("%c My first home work ", consoleStyle.join(";"));

// Second example
console.log("========= Second example =========");
if(testString) {
    if (firstNumber > secondNumber) {
        console.log(`Число ${firstNumber} больше, чем число ${secondNumber}`);
    } else if (firstNumber < secondNumber) {
        console.log(`Число ${firstNumber} меньше, чем число ${secondNumber}`);
    } else {
        console.log("Числа равны")
    }
}
console.assert(testString, errorMsg);

// Third example
console.log("========= Third example =========");
console.dir(consoleStyle);

// Fourth example
console.log("========= Fourth example =========");
console.table(consoleStyle);

// Fifth example
console.log("========= Fifth example =========");
const diff = Date.now() - start;
console.log("Time execution: " + diff + " ms");

