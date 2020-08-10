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


// function map
function map(array, callback) {
    let newMapArray = [];
    for (let i = 0; i < array.length; i++) {
        let newItem = callback(array[i]);
        newMapArray.push(newItem);
    }
    return newMapArray;
}
// example for function map
let newExampleArray =  map(numbersArray, (item) => {
    return item + 5;
});
console.log(newExampleArray);


// function filter
function filter(array, callback) {
    const newFilterArray = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newFilterArray.push(array[i]);
        }
    }
    return newFilterArray;
}
// example for function filter
const someNumbers = filter(numbersArray, (item) => item < 3);
console.log(someNumbers);


// function some
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return true;
        }
    }
     return false;
}
// example for function some
const someIsValid = some(numbersArray, (item) => {
    return item === 2;
});
console.log(someIsValid);


// function every
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            return false;
        }
    }
    return true;
}
// example for function every
const everyIsValid = every(numbersArray, (item) => {
    return typeof item === 'number';
});
console.log(everyIsValid);