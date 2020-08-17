'use strict';

// data
const string = "abc";
const string2 = "hello lol";
const numbers = 223344;

//1 task
function isSymbolPresentInString(str,symbol) {
    for(const item of str) {
        if (item === symbol) {
            return true
        }
    }
    return false
}

//2 task
function getSymbolIndex(str,symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            return i
        }
    }
    return -1;
}

//3 task
function getNumberOfEven(n) {
    let count = 0;
    let numbersToString = n.toString()
    for (let i = 0; i < numbersToString.length; i++) {
        if (numbersToString[i] % 2 === 0) {
            count++
        }
    }
    return count;
}

function main() {
    console.log(isSymbolPresentInString(string,"a"));
    console.log(isSymbolPresentInString(string,"d"));
    console.log(getSymbolIndex(string2,"l"));
    console.log(getNumberOfEven(numbers))
}
main();
