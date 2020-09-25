'use strict';

const wrapper = document.querySelector("#wrapper");
const colorsList = ["red", "green", "orange", "blue", "pink","purple", "brown"];
const selectFormat = document.querySelector("#select-format");
const dateFormatsArray = {
    localFormat : function localFormat() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
        const minuteFormatted = minute < 10 ? "0" + minute : minute;
        const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;

        return hour + ":" + minuteFormatted + ":" + secondsFormatted;
    },
    usaFormat : function usaFormat() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const hourFormatted = hour % 12 || 12;
        const minuteFormatted = minute < 10 ? "0" + minute : minute;
        const morning = hour < 12 ? "am" : "pm";

        return hourFormatted + ":" + minuteFormatted + " " + morning;
    }
};

if (wrapper !== null) {
    const container = document.createElement("div");
    container.className = "date-wrap";
    wrapper.prepend(container);
    let format = dateFormatsArray.localFormat;

    selectFormat.addEventListener("change", (event) => {
        let formatKey = event.target.value;
        if (dateFormatsArray[formatKey]) {
            format = dateFormatsArray[formatKey];
            container.innerHTML = '';
            displayDate(format);
        }
    });

    setInterval(() => {
        container.innerHTML = '';
        displayDate(format);
    }, 1000);

    addFormats();
}

function displayDate(format) {
    const container = document.querySelector(".date-wrap");
    const time = format();

    for (let item of time) {
        const itemWrapper = document.createElement("span");
        itemWrapper.className = "item-wrap";
        itemWrapper.innerHTML = item;
        container.appendChild(itemWrapper);
        itemWrapper.style.color = colorsList[Math.floor(Math.random() * colorsList.length)]
    }

    console.clear();
    console.log(time);
}

function addFormats() {
    Object.keys(dateFormatsArray).forEach(element => {
        const selectItem = document.createElement('option');
        selectItem.text = element;
        selectItem.value = element;
        selectItem.className = "format-item";
        selectFormat.appendChild(selectItem);
    })
}

