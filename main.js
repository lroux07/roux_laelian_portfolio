import './style.css';

let body = document.querySelector("body");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let message = document.querySelector("#message");
let btn = document.querySelector("#btn");

function focusName() {
    if(inputName.value.length >= 1) {
        inputName.style.borderBottom = "2px solid #4EE1A0";
        inputName.style.color = "white";
    } if(inputName.value == "") {
        inputName.style.borderBottom = "2px solid white";
    }
}

function focusEmail() {
    if(inputEmail.value.length >= 1) {
        inputEmail.style.borderBottom = "2px solid #4EE1A0";
    } if(inputEmail.value == "") {
        inputEmail.style.borderBottom = "2px solid white";
    }
}

function btnClick() {
    // if(inputName.value == "" || inputEmail.value == "" && inputName.value.length < 5 || inputEmail.value.length < 5) {
    //     inputName.style.borderBottom = "2px solid red";
    //     inputEmail.style.borderBottom = "2px solid red";
    //     btn.disabled = true;
    // } else if(inputName.value.length >= 5 || inputEmail.value.length >= 5) {
    //     btn.disabled = false;
    //     inputName.style.borderBottom = "2px solid #4EE1A0";
    //     inputEmail.style.borderBottom = "2px solid #4EE1A0";
    // }
    
    if(inputEmail.value.length == "@" && inputEmail.value == ".fr" || inputEmail.value == ".com") {
        inputEmail.style.borderBottom = "2px solid #4EE1A0";
        btn.disabled = false;
    } else {
        inputEmail.style.borderBottom = "2px solid red";
        btn.disabled = true;
    }
}

btn.addEventListener("click", btnClick);

inputName.addEventListener("keyup", focusName);
inputEmail.addEventListener("input", focusEmail);