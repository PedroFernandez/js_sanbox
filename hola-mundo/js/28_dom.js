'use strict'

// DOM - Document Object Model

// obtain elements by ID

function changeColor(color) {
    box.style.background = color;
}

//var box = document.getElementById('my_box');
var box = document.querySelector("#my_box");

box.innerText = "El Real Madrid es el mejor equipo del mundo!";
box.style.background = 'green';
box.style.padding = "20px";
box.style.color = "white";
box.className = "hola";

// console.log(box);

// obtain elements by their labels and css class

var getAllDivs = document.getElementsByTagName("div");
// console.log(getAllDivs[2].innerHTML);

for(let text in getAllDivs) {
    if (typeof getAllDivs[text].textContent == "string"){
        var paragraph = document.createElement("p");
        var content = document.createTextNode(getAllDivs[text].textContent);
        paragraph.prepend(content);
        document.querySelector("#my_section").prepend(paragraph);
    }
}

var red_divs = document.getElementsByClassName("red");
red_divs[0].style.background = "red";
red_divs[1].style.background = "red";

var yellow_divs = document.getElementsByClassName("yellow");
yellow_divs[0].style.background = "yellow";