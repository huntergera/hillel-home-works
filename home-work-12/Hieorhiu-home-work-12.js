'use strict';

//1 task
const squaresCounter = document.querySelector("#squares-counter");

squaresCounter.addEventListener("click", function (event) {
    const target = event.target;
    if(target.dataset.action === "plus") {
        target.closest('.square').querySelector('.counter').innerHTML++;
    } else if(target.dataset.action === "minus") {
        target.closest('.square').querySelector('.counter').innerHTML--;
    }
});

//2 task
const squaresList = document.querySelectorAll("#squares-change-color .square");
const colorsList = ['blue', 'green', 'yellow'];

for (const square of squaresList) {
    square.addEventListener("click", () => changeColor(square))
}

function changeColor(target) {
    const colorIndex = colorsList.findIndex(color => color === target.style.backgroundColor);
    colorIndex === colorsList.length - 1 || colorIndex === -1
        ? target.style.backgroundColor = colorsList[0]
        : target.style.backgroundColor = colorsList[colorIndex + 1];
}

//3 task
const listItems = document.querySelectorAll(".list .list__item");

for (const item of listItems) {
    item.addEventListener("click", function changeBackground() {
        if (!item.matches('.red')){
            for (const siblings of listItems) {
                siblings.classList.remove('red')
            }
            item.classList.add('red')
        }
    })
}
