'use strict';
const wrapper = document.querySelector("#wrapper");
const input = document.querySelector(".messenger__input");
const form = document.querySelector("#form");
const messagesList = document.querySelector(".messenger__message-list");
const botMessages = [
    "Ну что ж, до следующей встречи",
    "Круто",
    "Серьезно?",
    "Так и знал",
    "Это было предсказуемо",
    "Не думаю",
    "Все может быть",
    "Не исключено",
    "Это интересно",
    "И что ты намереваешься сделать?",
    "Ну это несерьезно"
];
const stopMessage = "ой все";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = input.value;
    if (inputValue) {
        main(inputValue);
    }
});

async function main(inputValue) {
    createUserMessage(inputValue);
    const botMessageIndex = randomInteger(1, botMessages.length - 1);
    await wait(1000);
    //inputValue === stopMessage.toLowerCase() ? createBotMessage(botMessages[0]) :
    if (inputValue === stopMessage.toLowerCase()) {
        createBotMessage(botMessages[0]);
        return false
    } else {
        createBotMessage(botMessages[botMessageIndex]);
    }
}

function createUserMessage(text) {
    const userMessage = document.createElement("li");
    userMessage.className = "messenger__message messenger__message--user";
    userMessage.innerHTML = text;

    input.value = "";
    input.focus();

    messagesList.appendChild(userMessage);
    userMessage.scrollIntoView();
}

function createBotMessage(text) {
    const botMessage = document.createElement("li");
    botMessage.className = "messenger__message messenger__message--bot";
    botMessage.innerHTML = text;

    messagesList.appendChild(botMessage);
    botMessage.scrollIntoView();
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
