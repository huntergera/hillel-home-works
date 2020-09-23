'use strict';
const wrapper = document.querySelector("#wrapper");

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


    // emailInput.addEventListener("input", (event) => {
    //     const value = event.target.value;
    //     submitButton.disabled = value === "";
    // });

    container.appendChild(emailInput);
    container.appendChild(passwordInput);
    passwordInput.appendChild(showPasswordButton);
    container.appendChild(submitButton);

    container.addEventListener('input', () => {
        console.log(isFormValid({
            emailInput: emailInput,
            passwordInput: passwordInput,
        }))
        if (isFormValid({
            emailInput: emailInput,
            passwordInput: passwordInput,
        }) === 5) {
            console.log(12)
            submitButton.disabled = true;
        } else {
            console.log(23)
            submitButton.disabled = false;
        }
    })

    return container;
}

function isFormValid(props) {
    if (props.emailInput !== null) {
        const input = props.emailInput.querySelector("#email");
        input.addEventListener("input", () => {
            if (validateEmail(input) === false) {
                props.emailInput.classList.add("error");
                const validFlag = 5;
                console.log(validFlag, " first")
                return validFlag;
            }   else {
                props.emailInput.classList.remove("error")
            }
        })
    }

    if (props.passwordInput !== null) {
        const input = props.passwordInput.querySelector("#password");
        input.addEventListener("input", () => {
            if (validatePassword(input) === false) {
                props.passwordInput.classList.add("error");
                const validFlag = 5;
                console.log(validFlag, " second")
                return validFlag;
            }   else {
                props.passwordInput.classList.remove("error")
                console.log('passwordInput')
            }
        })
    }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value);
}

function validatePassword(password) {
    if (
        password.value.length >= 8
        && someIsNumber(password)
        && isContainSymbol(password)
    ) {
        console.log('validate true')
        return true;
    }
    console.log('validate false')
    return false;
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
