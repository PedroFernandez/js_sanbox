'use strict'

function porConsola(num1, num2) {
    console.log("Suma " + (num1 + num2));
    console.log("Resta " + (num1 - num2));
    console.log("Multiplicación " + (num1 * num2));
    console.log("División " + (num1 / num2));
    console.log("*********************************")
}

function porPantalla(num1, num2) {
    document.write("Suma " + (num1 + num2) + "</br>");
    document.write("Resta " + (num1 - num2) + "</br>");
    document.write("Multiplicación " + (num1 * num2) + "</br>");
    document.write("División " + (num1 / num2) + "</br>");
}

function calculadora(num1, num2, display = false) {
    if(display == false) {
        porConsola(num1, num2);
    } else {
        porPantalla(num1, num2);
    }
}

for (var i = 1; i <= 10; i++) {
    calculadora(i, 8)
    // console.log("Voy por la iteración número -> " + i)
}