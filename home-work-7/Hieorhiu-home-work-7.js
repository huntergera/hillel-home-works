'use strict';

// data
const user = {
    id: 12,
    position: "Middle",
};

const userContacts = {
    email: "email@gmail.com",
    slack: "nick",
    telegram: "@nick",
};

const address1 = {
    country: "UA",
    city: "Odessa",
    street: "Kanatnaya",
    homeNumber: 22
};

const address2 = {
    country: "UA",
    city: "Odessa",
    street: "Kanatnaya",
    homeNumber: 22
};

const string = "aaabbc";

// 1 task
function copy(target, origin) {
    for (const key in origin) {
        const value = origin[key];
        target[key] = value;
    }
    return target;
}

// 2 task
function compare(object1, object2) {
    const keysArray1 = Object.keys(object1);
    const keysArray2 = Object.keys(object2);
    const valuesArray1 = Object.values(object1);
    const valuesArray2 = Object.values(object2);

    if(keysArray1.length === keysArray2.length) {

        for (let i = 0; i < keysArray1.length; i++) {
            if (keysArray1[i] !== keysArray2[i]) {
                return false
            }
        }
        for (let i = 0; i < valuesArray1.length; i++) {
            if (valuesArray1[i] !== valuesArray2[i]) {
                return false
            }
        }
        return true
    }
    return false
}

//3 task
function countItemsOfString(str) {
    const result = {};
    const items = str.split("");
    for (let i = 0; i < items.length; i++) {
        const count = result[items[i]] ? result[items[i]] : 0;
        result[items[i]] = count + 1;
    }
    return result;
}


function main() {
    console.log(copy(user, userContacts));
    console.log(compare(user, userContacts));
    console.log(compare(address1, address2));
    console.log(countItemsOfString(string))
}
main();
