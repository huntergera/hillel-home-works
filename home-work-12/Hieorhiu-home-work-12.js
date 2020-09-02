'use strict';
const squareSection = document.querySelector(".square-section");

squareSection.addEventListener("click", function (event) {
    const target = event.target;
    if(target.dataset.id === "plus") {
        target.closest('.square').querySelector('.counter').innerHTML++;
    } else if(target.dataset.id === "minus") {
        target.closest('.square').querySelector('.counter').innerHTML--;
    }
});


// for (const square of squareList) {
//     square.addEventListener("click", function (event) {
//         if (event.target === btnPlusList[i]) {
//             console.log(1)
//         } else if(event.target === btnMin) {
//             console.log(2)
//         }
//     })
// }
//
// btnPlus.addEventListener("click", (counter) => {
//     return counter++
// })
//
// btnMin.addEventListener("click", () => {
//     x -= step;
//     square.style.transform = `translateX(${x}px)`;
// })
