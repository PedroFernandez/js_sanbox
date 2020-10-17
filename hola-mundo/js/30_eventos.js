'use strict'

window.addEventListener('load', () => {
    var button = document.querySelector("#approve_01");

    function changeColor() {

        var bt = button.style.background;

        if(bt == "green") {
            button.style.background = "red";
        } else {
            button.style.background = "green";
        }
        button.style.padding = "10px";
        button.style.border = "1px solid #ccc";
    }

    button.addEventListener('click', function () {
        console.log(this);
        changeColor();
        this.style.border = " 10px solid black";
    });

    button.addEventListener('mouseover', function () {
        button.style.color = "yellow";
    });

    button.addEventListener('mouseout', function () {
        button.style.color = "black";
    });

    // focus, blur, keydown, keypress, keyup
    var input = document.querySelector("#field_name");
    input.addEventListener('focus', function () {
        console.log("[focus] You are inside input");
    });

    var input = document.querySelector("#field_name");
    input.addEventListener('blur', function () {
        console.log("[blur] You are outside the input");
    });

    var input = document.querySelector("#field_name");
    input.addEventListener('keydown', function (event) {
        console.log("[keydown] Pressing this key", String.fromCharCode(event.keyCode));
    });

    // e.preventDefault();

});

