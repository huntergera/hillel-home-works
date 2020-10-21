'use strict';
const wrapper = document.querySelector("#wrapper");
const input = document.querySelector(".messenger__input");
const form = document.querySelector("#form");
const messagesList = document.querySelector(".messenger__message-list");
const data = {
    botIsActive: true,
    firstBotMessage: `
        Привет, я бот. Ты можешь задавать мне любые вопросы, а я постараюсь на них ответить. Также есть команды,с помощью которых ты можешь выполнять разные действия (прекратить / продолжить общение и т. д.), для этого введи "инфо"
        `,
    infoUserMessage: "инфо",
    infoBotMessage: `
            "ой все" - прекратить общение, <br>
            "старт" - восстановить общение, <br>
            "инфо" - вывести информацию о командах <br>
        `,
    startUserMessage: "старт",
    startBotMessage: "и снова привет:)",
    startBotMessageBotIsActive: "мы и так с тобой общаемся",
    endUserMessage: "ой все",
    endBotMessage: "Ну что ж, до следующей встречи",
    botMessages: [
        "Круто",
        "Серьезно?",
        "Так и знал",
        "Это было предсказуемо",
        "Не думаю",
        "Все может быть",
        "Не исключено",
        "Это интересно",
        "И что ты намереваешься сделать?",
        "Ну это несерьезно",
        "Лучше не торопиться в данном случае"
    ]
};

if (wrapper !== null) {
    createBotMessage(data.firstBotMessage);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputValue = input.value;
        if (inputValue) {
            main(inputValue);
        }
    });
}

async function main(inputValue) {
    createUserMessage(inputValue);
    const botMessageIndex = randomInteger(0, data.botMessages.length - 1);
    const botMessageDelay = randomInteger(1, 3);
    try {
        await wait(botMessageDelay*1000);
    } catch(err) {
        throw new Error("Чтото пошло не так")
    }

    if (data.botIsActive === true) {
        switch (inputValue) {
            case data.endUserMessage.toLowerCase():
                createBotMessage(data.endBotMessage);
                data.botIsActive = false;
                break;
            case data.infoUserMessage.toLowerCase():
                createBotMessage(data.infoBotMessage);
                break;
            case data.startUserMessage.toLowerCase():
                createBotMessage(data.startBotMessageBotIsActive);
                break;
            default:
                createBotMessage(data.botMessages[botMessageIndex]);
        }
    } else {
         if (inputValue === data.startUserMessage.toLowerCase()) {
            createBotMessage(data.startBotMessage);
            data.botIsActive = true;
        }
    }
}

function createMessage(props) {
    const message = document.createElement("li");
    message.className = props.className;
    message.innerHTML = props.text;

    messagesList.appendChild(message);
    message.scrollIntoView({block: "center", behavior: "smooth"});
}

function createUserMessage(text) {
    createMessage({
        className: "messenger__message messenger__message--user",
        text: text
    });

    input.value = "";
    input.focus();
}

function createBotMessage(text) {
    createMessage({
        className: "messenger__message messenger__message--bot",
        text: text
    });
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
