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
    if(keysArray1.length !== keysArray2.length) {
        return false
    } else {
        for (const key in object1) {
            if (object1[key] !== object2[key]) return false;
        }
        return true
    }
}

//3 task
function countItemsOfString(str) {
    const result = {};
    for (let i = 0; i < string.length; i++) {
        const count = result[string[i]] ? result[string[i]] : 0;
        result[string[i]] = count + 1;
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
