'use strict';
const wrapper = document.querySelector("#wrapper");
const input = document.querySelector(".messenger__input");
const form = document.querySelector("#form");
const messagesList = document.querySelector(".messenger__message-list");
const botMessages = [
    "Привет",
    "Круто",
    "Серьезно?"
];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value;

    if (input.value) {
        createUserMessage(inputValue);
        main();
    }
});

async function main() {

    const botMessageIndex = await randomInteger(0, botMessages.length - 1);
    await wait(1000)
    await createBotMessage(botMessages[botMessageIndex]);
}

function createUserMessage(text) {
    const userMessage = document.createElement("li");
    userMessage.className = "messenger__message messenger__message--user";
    userMessage.innerHTML = text;

    input.value = "";

    messagesList.appendChild(userMessage);
}

function createBotMessage(text) {
    const userMessage = document.createElement("li");
    userMessage.className = "messenger__message messenger__message--bot";
    userMessage.innerHTML = text;

    input.value = "";

    messagesList.appendChild(userMessage);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}