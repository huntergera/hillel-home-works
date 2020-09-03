'use strict';
const squaresCounter = document.querySelector("#squares-counter");

squaresCounter.addEventListener("click", function (event) {
    const target = event.target;
    if(target.dataset.action === "plus") {
        target.closest('.square').querySelector('.counter').innerHTML++;
    } else if(target.dataset.action === "minus") {
        target.closest('.square').querySelector('.counter').innerHTML--;
    }
});

const squaresList = document.querySelectorAll("#squares-change-color .square");
const BLUE = 'blue';
const GREEN = 'green';
const YELLOW = 'yellow';
const defaultColor = 'chocolate';

for (let i = 0; i < squaresList.length; i++) {
    const target = squaresList[i];
    target.addEventListener("click", function changeColor() {
        switch (target.style.backgroundColor) {
            case BLUE:
                target.style.backgroundColor = GREEN;
                break;
            case GREEN:
                target.style.backgroundColor = YELLOW;
                break;
            case YELLOW:
                target.style.backgroundColor = defaultColor;
                break;
            default:
                target.style.backgroundColor = BLUE;
        }
    });
}
