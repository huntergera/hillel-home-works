'use strict';
const button = document.querySelectorAll("button")[0];

function getCountOfElements(wrapper, element) {
    const elements = document.querySelector(wrapper).querySelectorAll(element);
    return elements.length;
}

const spanCount = getCountOfElements('#wrapper', 'span');
const pCount = getCountOfElements('#wrapper', 'p');
const allCount = getCountOfElements('#wrapper', '*');

function getTypeOfValue(wrapper, element) {
    const countElements = {
        countString: 0,
        countNumber: 0,
    };
    const allElements = document.querySelector(wrapper).querySelectorAll(element);

    for (const item of allElements) {
        isNaN(item.innerHTML) ? countElements.countString += 1 : countElements.countNumber += 1
    }
    return countElements;
}

const countAllElements = Object.assign({}, getTypeOfValue('#wrapper', '*'));

function renderResultToElement(element) {
    const result =  document.querySelector(element);
    result.innerText = `
        Количество всех тегов: ${allCount}
        Количество тегов p: ${pCount}
        Количество тегов span: ${spanCount}
        Кол-во тегов, в которых содержимое - число: ${countAllElements.countNumber}
        Кол-во тегов, в которых содержимое - строка: ${countAllElements.countString}
    `;
}

if (button !== null) {
    button.addEventListener("click",()=>{renderResultToElement('#result')});
}
