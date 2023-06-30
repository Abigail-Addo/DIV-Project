
let theme = document.getElementById("theme");
let contentOne = document.getElementById("labelOne");
let contentTwo = document.getElementById("labelTwo");
let path1 = document.getElementById("path1");
let path2 = document.getElementById("path2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function enableDarkMode(event) {
    theme.classList.add("dark");
    card.classList.add("dark");
    contentOne.style.color = "white";
    contentTwo.style.color = "white";
    path1.style.fill = "#fff";
    path2.style.fill = "#142649";
    button1.style.backgroundColor = "transparent";
    button2.style.backgroundColor = "#fff";

    let isClicked = event.target.clicked;
    let inputF = document.getElementById("inputF");
    let inputField = document.getElementById("inputField");
    if (isClicked = "true") {
        inputF.classList.add("inputUser");
        inputField.classList.add("inputPwd");
    }
};

function enableLightMode(event) {

    theme.classList.remove("dark");
    card.classList.remove("dark");
    contentOne.style.color = "black";
    contentTwo.style.color = "black";
    path1.style.fill = "#fff";
    path2.style.fill = "#142649";
    button1.style.backgroundColor = "#142649";
    button2.style.backgroundColor = "transparent";

    let isClicked = event.target.clicked;
    let inputF = document.getElementById("inputF");
    let inputField = document.getElementById("inputField");
    if (isClicked = "true") {
        inputF.classList.remove("inputUser");
        inputField.classList.remove("inputPwd");
    }
};




