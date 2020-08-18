'use strict';

// data
const string = "abc";
const string2 = "hello lol";
const numbers = 223344;

const objTest1 = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000
};

const objTest2 = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000
};

const numbersArray = [1, 2, 3, 4];
const numbersArray2 = [1, 2, 3, 4, 5];

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
    const numbersToString = n.toString();
    for (let i = 0; i < numbersToString.length; i++) {
        if (numbersToString[i] % 2 === 0) {
            count++
        }
    }
    return count;
}

//4 task
function isObject(object) {
    return typeof object === "object" && object !== null && !Array.isArray(object);
}

function deepEqual(arg1, arg2) {
    if (isObject(arg1) && isObject(arg2) || Array.isArray(arg1) && Array.isArray(arg2)) {
        if(Object.keys(arg1).length !== Object.keys(arg2).length){
            return false;
        } else {
            let equals = true;
            for (const property in arg1) {
                if (arg1.hasOwnProperty(property) && arg2.hasOwnProperty(property)) {
                    if (!deepEqual(arg1[property], arg2[property])) {
                        equals = false;
                    }
                } else equals = false;
            }
            return equals;
        }
    } else {
        return arg1 === arg2;
    }
}



function main() {
    console.log(isSymbolPresentInString(string,"a"));
    console.log(isSymbolPresentInString(string,"d"));
    console.log(getSymbolIndex(string2,"l"));
    console.log(getNumberOfEven(numbers));

    console.log(deepEqual(2, 2));
    console.log(deepEqual(numbersArray, numbersArray2));
    console.log(deepEqual(objTest1, objTest2));
}
main();
