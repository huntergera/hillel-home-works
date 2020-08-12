'use strict';

const user = {
    id: 12,
    position: "Middle",
};

const userContacts = {
    email: "email@gmail.com",
    telegram: "@nick",
};

function copy(target, origin) {
    for (const key in origin) {
        const value = origin[key];
        target[key] = value;
    }
    return target;
}

copy(user, userContacts);

console.log(user);