'use strict';


const wrapper = document.querySelector("#wrapper");
const colorsList = ["red", "green",]

if (wrapper !== null) {
    const container = document.createElement("div");
    container.className = "date-wrap";
    wrapper.appendChild(container);

    setInterval(() => {
        const date = displayDate();
        container.innerHTML = date;
        console.log(date)
    }, 1000);

}


function displayDate() {

    const now = new Date();
    const time = localFormat(now);
    console.log(typeof time)

    return time;
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

