'use strict';
const wrapper = document.querySelector("#wrapper");
if (wrapper !== null) {
    const list = createList();

    const form = createForm({
        onAdd: (value) => {
            const li = createListItem({ text: value });
            list.appendChild(li);
        }
    });

    wrapper.appendChild(form);
    wrapper.appendChild(list);
}

function createForm(props) {
    const container = document.createElement("div");
    container.className = "form";

    let inputValue = "";

    const okButton = createButton({
        text: "OK",
        className: "btn",
        disabled: true,
        onClick: () => {
            if (typeof props.onAdd === "function") {
                props.onAdd(inputValue);
            }
        }
    });

    const input = createInput({
        placeholder: "Enter text",
        onChange: (value) => {
            inputValue = value;
            okButton.disabled = value === "";
        }
    });

    container.appendChild(input);
    container.appendChild(okButton);

    return container;
}

function createButton(props) {
    const text = props.text || "";
    const className = props.className || "";
    const disabled = props.disabled || false;

    const button = document.createElement("button");

    button.addEventListener("click", () => {
        if (typeof props.onClick === "function") {
            props.onClick();
        }
    });

    button.type = "button";
    button.innerHTML = text;
    button.className = className;
    button.disabled = disabled;

    return button;
}

function createInput(props) {
    const placeholder = props.placeholder || "";

    const input = document.createElement("input");
    input.placeholder = placeholder;
    input.addEventListener("input", function (event) {
        if (typeof props.onChange === "function") {
            props.onChange(event.target.value);
        }
    });

    return input;
}

function createList() {
    const list = document.createElement("ul");
    return list;
}

function createListItem(props) {
    const text = props.text || "";

    const element = document.createElement("li");
    element.innerHTML = text;

    return element;
}
