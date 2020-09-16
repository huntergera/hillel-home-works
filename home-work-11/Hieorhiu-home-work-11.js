'use strict';
const wrapper = document.querySelector("#wrapper");
const arrayOfNames = ['Jon', 'Peter', 'Bob'];

if (wrapper !== null) {
    const list = createList();
    arrayOfNames.forEach(name => {
            const li = createListItem({text: name});
            list.appendChild(li);
        }
    );

    const form = createForm((value) => {
        const li = createListItem({text: value});
        list.appendChild(li);
    });

    wrapper.appendChild(form);
    wrapper.appendChild(list);
}

function createForm(onAdd) {
    const container = document.createElement("div");
    container.className = "form";

    const okButton = createButton({
        text: "OK",
        className: "waves-effect waves-light btn",
        disabled: true
    });

    const input = createInput({
        placeholder: "Enter text",
    });

    okButton.addEventListener("click", () => {
        if (typeof onAdd === "function") {
            onAdd(input.value);
            input.value = "";
            okButton.disabled = true;
            input.focus();
        }
    });

    input.addEventListener("input", (event) => {
        const value = event.target.value;
        okButton.disabled = value === "";
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

    return input;
}

function createList() {
    const list = document.createElement("ul");
    list.className = "users-list";

    return list;
}

function createListItem(props) {
    let text = props.text || "";

    const element = document.createElement("li");
    element.innerHTML = text;

    const editButton = createButton({
        text: "Редактировать",
        className: "waves-effect waves-light btn",
    });

    const deleteButton = createButton({
        text: "Удалить",
        className: "waves-effect waves-light btn red darken-1",
    });

    editButton.addEventListener("click", () => {
        text = createPrompt({
            placeholder: 'Введите новое имя',
            defaultText: text
        });
        element.innerHTML = text;
        element.appendChild(editButton);
        element.appendChild(deleteButton);
    });

    deleteButton.addEventListener("click", () => {
        text = createConfirm('Удалить данного пользователя?');
        if (text) {
            element.remove();
        }
    });

    element.appendChild(editButton);
    element.appendChild(deleteButton);

    return element;
}

function createPrompt(props) {
    const promptValue = prompt(props.placeholder, props.defaultText);
    return promptValue;
}

function createConfirm(question) {
    const isTrue = confirm(question);
    return isTrue;
}
