'use strict';
const BASE_URL = "https://rickandmortyapi.com/api/character/";
const wrapper = document.querySelector("#wrapper");

// function loadCharacters(params, onSuccess) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "json";
//
//     const searchParams = new URLSearchParams();
//     Object.keys(params)
//         .forEach((key) => searchParams.set(key, params[key]));
//
//     xhr.open("GET", `${BASE_URL}?${searchParams}`);
//
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             onSuccess({
//                 hasNextPage: xhr.response.info.next !== null,
//                 hasPrevPage: xhr.response.info.prev !== null,
//                 page: params.page,
//                 results: xhr.response.results
//             });
//         } else {
//             console.error("Something went wrong");
//         }
//     }
//
//     xhr.onerror = function () {
//         console.error("ERROR");
//     }
//
//     xhr.send();
// }
//
// function render(data) {
//     console.log("render", data);
// }
//
// loadCharacters({ page: 1 }, render);
// console.log("send");

class CharacterList {
    constructor() {
        this.page = 1;
        this.data = {};

        this.list = document.createElement("ul");
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
        }

        xhr.send();
    }

    onDataLoad() {
        console.log(this.data);
    }

    createListItem(props) {
        const element = document.createElement("li");
        element.innerHTML = text;
    }

    createList() {
        const element = document.createElement("ul");
        list.className = "users-list";

    }

    render() {
        console.log("CharacterList.render", this.page, this.data);

        wrapper.appendChild(this.list);
        this.loadCharacters();
    }
}

const list = new CharacterList();
list.render();