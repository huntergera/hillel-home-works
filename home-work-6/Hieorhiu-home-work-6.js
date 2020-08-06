'use strict';

const numbersArray = [1, 2, 3, 4];

// function forEach
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
// example for function forEach
forEach(numbersArray, (item) => {
    console.log(item + 5);
});

let newNumbersArray = [];
function map(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
        console.log(array[i])
        newNumbersArray.push(array[i]);
    }
    return newNumbersArray;
}

map(numbersArray, (item) => {
    return item + 5
});
console.log(newNumbersArray);
