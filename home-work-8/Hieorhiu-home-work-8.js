'use strict';

// data
const string = "abc";
const string2 = "hello lol";
const numbers = 223344;

//1 task
function isSymbolPresentInString(str,symbol) {
    const items = str.split("");
    for(const item of items) {
        return item === symbol;
    }
}

//2 task
function getSymbolIndex(str,symbol) {
    const items = str.split("");
    for (let i = 0; i < items.length; i++) {
        if (items[i] === symbol) {
            return i
        }
    }
    return -1;
}

//3 task
function getNumberOfEven(n) {

}

function main() {
    console.log(isSymbolPresentInString(string,"a"));
    console.log(isSymbolPresentInString(string,"e"));
    console.log(getSymbolIndex(string2,"l"));
}
main();