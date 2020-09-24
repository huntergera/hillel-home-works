'use strict';
const wrapper = document.querySelector("#wrapper");
const data = {
    email: '',
    password: ''
};

if (wrapper !== null) {
    const form = createForm();
    wrapper.appendChild(form);
}

function createForm() {
    const container = document.createElement("form");
    container.className = "loginForm";

    const submitButton = createButton({
        text: "SUBMIT",
        className: "waves-effect waves-light btn",
        disabled: true
    });

    const showPasswordButton = createButton({
        text: "SHOW",
        className: "btn blue",
    });

    const emailInput = createInput({
        placeholder: "Email",
        id: "email"
    });

    const passwordInput = createInput({
        placeholder: "Password",
        type: "password",
        id: "password"
    });

    showPasswordButton.addEventListener("click", () => {
        const passwordInputCreated = document.querySelector("#password");
        passwordInputCreated.type =  passwordInputCreated.type === "password" ? "text" : "password";
        const buttonText = showPasswordButton.innerHTML;
        showPasswordButton.innerHTML = buttonText === "SHOW" ? "HIDE" : "SHOW";
    });

    submitButton.addEventListener("click", () => {
        data.email = inputEmail.value;
        data.password = inputPassword.value;
        console.log(data);
    });

    container.appendChild(emailInput);
    container.appendChild(passwordInput);
    passwordInput.appendChild(showPasswordButton);
    container.appendChild(submitButton);

    container.addEventListener("input", () => {
        submitButton.disabled = !(areValidInputs.emailValid && areValidInputs.passwordValid);
    });

    return container;
}

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const form = document.querySelector(".form");
const areValidInputs = {
    emailValid: false,
    passwordValid: false
};

inputEmail.addEventListener("input", () => {
    if (validateEmail(inputEmail) === false) {
        inputEmail.closest('.input-row').classList.add("error");
        areValidInputs.emailValid = false;
    }   else {
        inputEmail.closest('.input-row').classList.remove("error");
        areValidInputs.emailValid = true;
    }
});

inputPassword.addEventListener("input", () => {
    if (validatePassword(inputPassword) === false) {
        inputPassword.closest('.input-row').classList.add("error");
        areValidInputs.passwordValid = false;
    }   else {
        inputPassword.closest('.input-row').classList.remove("error");
        areValidInputs.passwordValid = true;
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value);
}

function validatePassword(password) {
    return password.value.length >= 8
        && someIsNumber(password)
        && isContainSymbol(password);
}

function someIsNumber(element) {
    for (let item of element.value) {
        if (!Number.isNaN(+item)) {
            return  true;
        }
    }
    return false;
}

function isContainSymbol(array) {
    const symbolArray = ["@", "$", "#", "!", "?", "&"];
    for (let i = 0; i < symbolArray.length; i++) {
        for (let j = 0; j < array.value.length; j++) {
            if (symbolArray[i] === array.value[j]) {
                return true;
            }
        }
    }
    return false;
}

function createButton(props) {
    const text = props.text || "";
    const className = props.className || "";
    const disabled = props.disabled || false;

    const button = document.createElement("button");

    button.type = "button";
    button.innerHTML = text;
    button.className = className;
    button.disabled = disabled;

    return button;
}

function createInput(props) {
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "input-row";

    const placeholder = props.placeholder || "";
    const inputType =  props.type || "text";
    const inputId =  props.id || "";

    const input = document.createElement("input");
    input.placeholder = placeholder;
    input.type = inputType;
    input.id = inputId;

    inputWrapper.appendChild(input);

    return inputWrapper;
}
