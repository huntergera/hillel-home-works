'use strict';
const BASE_URL = "https://rickandmortyapi.com/api/character/";
const wrapper = document.querySelector("#wrapper");

const buttonTypes = Object.freeze({
    prev: "prev",
    next: "next"
});

const keyCodes = Object.freeze({
    arrowLeft: "ArrowLeft",
    arrowRight: "ArrowRight"
});

class Button {
    constructor(props) {
        this.button = document.createElement("button");
        this.button.innerText = props.text || "";
        this.button.dataset.type = props.dataset || "";
        this.button.className = props.className || "";
    }

    render() {
        return this.button;
    }

    setDisabled(disabled) {
        this.button.disabled = disabled;
    }

    onClick(cb) {
        this.button.addEventListener("click", cb);
    }
}

class Text {
    constructor(props) {
        this.text = document.createElement("span");
        this.text.innerText = props.text || "";
        this.text.className = props.className || "";
    }

    setText(value) {
        this.text.innerText = value;
    }

    render() {
        return this.text;
    }
}

class CharacterList {
    constructor() {
        this.page = 1;
        this.data = {};
        this.list = document.createElement("ul");
        this.prevButton = new Button({ text: "PREV", dataset: "prev", className: "waves-effect waves-light btn"});
        this.nextButton = new Button({ text: "NEXT", dataset: "next", className: "waves-effect waves-light btn" });
        this.pageLabel = new Text({text: this.page, className: "page"});
    }

    loadCharacters() {

        const searchParams = new URLSearchParams({ page: 10 });
        searchParams.set("page", this.page);

        fetch(`${BASE_URL}?${searchParams}`)
            .then(
                successResponse => {
                    if (successResponse.status === 200) {
                        return successResponse.json();
                    } else {
                        throw new Error("Error loading data");
                    }
                },
            )
            .then(
                data => {
                    this.data = {
                        hasNextPage: data.info.next !== null,
                        hasPrevPage: data.info.prev !== null,
                        results: data.results
                    };
                    this.onDataLoad();
                },
            )
    }

    onDataLoad() {
        this.list.innerHTML = "";

        for (const user of this.data.results) {
            const listItem = document.createElement("li");
            listItem.innerText = user.name;
            this.list.appendChild(listItem);
        }

        this.pageLabel.setText(this.page);
        this.prevButton.setDisabled(!this.data.hasPrevPage);
        this.nextButton.setDisabled(!this.data.hasNextPage);
    }

    onButtonClick(event) {
        switch (event.target.dataset.type) {
            case buttonTypes.next: {
                this.page++;
                this.loadCharacters();
                break;
            }
            case buttonTypes.prev: {
                this.page--;
                this.loadCharacters();
                break;
            }
            default: break;
        }
    }

    onKeyDown(event) {
        switch (event.key) {
            case keyCodes.arrowLeft: {
                if (this.data.hasPrevPage) {
                    this.page--;
                    this.loadCharacters();
                }
                break;
            }
            case keyCodes.arrowRight: {
                if (this.data.hasNextPage) {
                    this.page++;
                    this.loadCharacters();
                }
                break;
            }
            default: break;
        }
    }

    render() {
        [
            this.nextButton,
            this.prevButton
        ].forEach(button => button.onClick(this.onButtonClick.bind(this)));

        document.addEventListener("keydown", this.onKeyDown.bind(this));

        const paginatorWrapper = document.createElement("div");
        paginatorWrapper.appendChild(this.prevButton.render());
        paginatorWrapper.appendChild(this.pageLabel.render());
        paginatorWrapper.appendChild(this.nextButton.render());

        wrapper.appendChild(this.list);
        wrapper.appendChild(paginatorWrapper);

        this.loadCharacters();
    }
}

const list = new CharacterList();
list.render();
