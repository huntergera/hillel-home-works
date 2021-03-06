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

class CharacterList {
    constructor() {
        this.page = 1;
        this.data = {};

        this.list = document.createElement("ul");

        this.prevButton = document.createElement("button");
        this.prevButton.className = "waves-effect waves-light btn";
        this.prevButton.innerText = "PREV";
        this.prevButton.dataset.type = buttonTypes.prev;

        this.nextButton = document.createElement("button");
        this.nextButton.className = "waves-effect waves-light btn";
        this.nextButton.innerText = "NEXT";
        this.nextButton.dataset.type = buttonTypes.next;

        this.pageLabel = document.createElement("span");
        this.pageLabel.className = "page";
    }

    loadCharacters() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";

        const searchParams = new URLSearchParams();
        searchParams.set("page", this.page);

        xhr.open("GET", `${BASE_URL}?${searchParams}`);
        xhr.setRequestHeader("X-AUTH", "fa3d00e1-b426-4e5b-b7f3-29bbca8d0c77");

        xhr.onload = () => {
            if (xhr.status === 200) {
                this.data = {
                    hasNextPage: xhr.response.info.next !== null,
                    hasPrevPage: xhr.response.info.prev !== null,
                    results: xhr.response.results
                };
                this.onDataLoad();
            } else {
                console.error("Something went wrong");
            }
        };

        xhr.onerror = function () {
            console.error("ERROR");
        };

        xhr.send();
    }

    onDataLoad() {
        this.list.innerHTML = "";

        for (const user of this.data.results) {
            const listItem = document.createElement("li");
            listItem.innerText = user.name;
            this.list.appendChild(listItem);
        }

        this.pageLabel.innerText = this.page;

        this.prevButton.disabled = !this.data.hasPrevPage;
        this.nextButton.disabled = !this.data.hasNextPage;
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
        ].forEach(button => button.addEventListener("click", this.onButtonClick.bind(this)));

        document.addEventListener("keydown", this.onKeyDown.bind(this));

        const paginatorWrapper = document.createElement("div");
        paginatorWrapper.appendChild(this.prevButton);
        paginatorWrapper.appendChild(this.pageLabel);
        paginatorWrapper.appendChild(this.nextButton);

        wrapper.appendChild(this.list);
        wrapper.appendChild(paginatorWrapper);

        this.loadCharacters();
    }
}

const list = new CharacterList();
list.render();
