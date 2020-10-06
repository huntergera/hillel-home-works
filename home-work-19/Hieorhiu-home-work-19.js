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

        const searchParams = new URLSearchParams({ page: 10 });
        searchParams.set("page", this.page);

        let xhr = fetch(`${BASE_URL}?${searchParams}`)
            .then(response => response.json())
            .then(
                data => {
                    if (data.status === 200) {
                        this.data = {
                            hasNextPage: data.info.next !== null,
                            hasPrevPage: data.prev !== null,
                            results: data.results
                        };
                        console.log(data)
                        this.onDataLoad();
                    } else {
                        return null;
                    }
                },
                failResponse => {
                    return null;
                }
            )


        // let xhr = fetch(`${BASE_URL}?${searchParams}`).then(
        //     successResponse => {
        //         if (successResponse.status === 200) {
        //             this.data = {
        //                 hasNextPage: xhr.response.info.next !== null,
        //                 hasPrevPage: xhr.response.info.prev !== null,
        //                 results: response.results
        //             };
        //             this.onDataLoad();
        //         } else {
        //             return null;
        //         }
        //     },
        //     failResponse => {
        //         return null;
        //     }
        // )



        // return new Promise((resolve, reject) => {
        //     const xhr = new XMLHttpRequest();
        //     xhr.responseType = "json";
        //
        //     const searchParams = new URLSearchParams();
        //     searchParams.set("page", this.page);
        //
        //     xhr.open("GET", `${BASE_URL}?${searchParams}`);
        //     // xhr.setRequestHeader("X-AUTH", "fa3d00e1-b426-4e5b-b7f3-29bbca8d0c77");
        //
        //     xhr.onload = () => {
        //         if (xhr.status === 200) {
        //             this.data = {
        //                 hasNextPage: xhr.response.info.next !== null,
        //                 hasPrevPage: xhr.response.info.prev !== null,
        //                 results: xhr.response.results
        //             };
        //             this.onDataLoad();
        //         } else {
        //             reject(new Error("Something went wrong"));
        //         }
        //     };
        //
        //     xhr.onerror = function () {
        //         reject(new Error("Something went wrong"));
        //     };
        //
        //     xhr.send();
        // })
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
        //console.log(event, this);
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