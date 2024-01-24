import './style.css';

let body = document.querySelector("body");
let input = document.querySelectorAll('input');

let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");

function focusName() {
    inputName.style.borderBottom = "2px solid red";

    body.addEventListener("click", ()=> {
        inputName.style.borderBottom = "2px solid #9d9d9d";
        inputEmail.style.borderBottom = "2px solid #9d9d9d";
    });
}

function focusEmail() {
    inputEmail.style.borderBottom = "2px solid red";

    body.addEventListener("click", ()=> {
        inputEmail.style.borderBottom = "2px solid #9d9d9d";
    });
}

inputName.addEventListener("input", focusName);
inputEmail.addEventListener("input", focusEmail);