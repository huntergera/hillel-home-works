'use strict';

function makeSum() {
    let count = 0;

    return (arg) => {
        count += arg;
        return count
    }

}

const counter = makeSum();

function main() {
    console.log(counter(3));
    console.log(counter(5));
    console.log(counter(20));
}
main();
