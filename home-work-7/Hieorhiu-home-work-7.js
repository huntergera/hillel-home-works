'use strict';

// objects
const user = {
    id: 12,
    position: "Middle",
};

const userContacts = {
    email: "email@gmail.com",
    slack: "nick",
    telegram: "@nick",
};

// 1 task
function copy(target, origin) {
    for (const key in origin) {
        const value = origin[key];
        target[key] = value;
    }
    return target;
}

copy(user, userContacts);
console.log(user);

// 2 task
function compare(object1, object2) {
    if(Object.keys(object1) === Object.keys(object2)) {
        return true
        console.log(1)
    }
    console.log(2)
    // const keys = Object.keys(user);
    //
    // const values = Object.values(user);
}

compare(user, userContacts);




function main() {
    copy(user, userContacts);
}

main();
