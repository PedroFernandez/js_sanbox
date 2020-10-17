'use strict'

window.addEventListener('load', () => {
    setInterval(function () {
        console.log("SetInterval executed!");

        var header = document.querySelector("h1");

        if (header.style.fontSize == "50px"){
            document.querySelector("h1").style.fontSize = "20px";
        } else {
            document.querySelector("h1").style.fontSize = "50px";
        }
    }, 5000);
});