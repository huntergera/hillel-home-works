'use strict';
const form = document.querySelector("form");
const passwordVisibility = document.querySelector("#eyeBtn");
const password = document.querySelector("form input[type=\"password\"]");
const email = document.querySelector("#email");

form.addEventListener("submit", event =>{
    event.preventDefault();
    if(isValidForm()) {

        const result = Array.from(form.elements)
            .filter(element => isInput(element))
            .reduce((acc, element) => {
                const name = element.name;
                const value = element.value;

                acc[name] = value;
                return acc;
            }, {});

        const customEvent = new CustomEvent("myFormCompleted", {detail: result});
        document.dispatchEvent(customEvent);
    }
});

document.addEventListener("myFormCompleted", event => {
    console.log(event.detail);
});

function isInput(element) {
    return element instanceof HTMLInputElement;
}

function isValidForm() {
    if(isValidEmail()) {
        email.classList.remove('error');

    } else {
        email.classList.add('error');
        return false
    }

    return true
}

email.addEventListener("blur", () => {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(arg.value);
}

function isValidEmail(arg) {

}



passwordVisibility.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";

    const buttonText = passwordVisibility.innerHTML;
    passwordVisibility.innerHTML = buttonText === "SHOW" ? "HIDE" : "SHOW";
});
