'use strict';


const wrapper = document.querySelector("#wrapper");
const colorsList = ["red", "green", "yellow", "blue"];

if (wrapper !== null) {
    const container = document.createElement("div");
    container.className = "date-wrap";
    wrapper.appendChild(container);

    setInterval(() => {
        container.innerHtml = 'dfg';
        console.log(container.innerHtml)
        const date = displayDate();
        for (let item of date) {
            container.appendChild(item)
        }
        console.log(container.innerHtml)
        container.innerHtml = '';
        //console.log(date)
        //container.innerHTML = date;
        // console.clear();
        // console.log(date);
    }, 1000);

}


function displayDate() {
    const now = new Date();
    const time = localFormat(now);
    const timeFormatted = [];
    for (let item of time) {
        //console.log(item)
        const itemWrapper = document.createElement("span");
        itemWrapper.className = "item-wrap";

        itemWrapper.innerHTML = item;

        timeFormatted.push(itemWrapper);
        //console.log(timeFormatted)

        //console.log(itemWrapper)

        // const colorIndex = colorsList.findIndex(color => color === item.style.backgroundColor);
        // colorIndex === colorsList.length - 1 || colorIndex === -1
        //     ? item[i].style.backgroundColor = colorsList[0]
        //     : item[i].style.backgroundColor = colorsList[colorIndex + 1];
    }
    return timeFormatted;
}

function usaFormat(date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const hourFormatted = hour % 12 || 12; // hour returned in 24 hour format
    const minuteFormatted = minute < 10 ? "0" + minute : minute;
    const morning = hour < 12 ? "am" : "pm";

    return hourFormatted + ":" + minuteFormatted + " " + morning;
}

function localFormat(date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const minuteFormatted = minute < 10 ? "0" + minute : minute;
    const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;

    return hour + ":" + minuteFormatted + ":" + secondsFormatted;
}

