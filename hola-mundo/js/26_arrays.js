'use strict'

var frutas = ['manzana', 'pera', 'melocoton', 'melon', "kiwi", "ciruela", "pepe"];

// var lenguajes = new Array('php', 'java', 'go', 'c++');
//
// document.write("<h1>" + frutas[0] + "</h1>");
// document.write("<h1>" + frutas.length + "</h1>");
//
// var elemento = parseInt(prompt("Qué elemento de la array quieres?", 0));
// if(elemento >= frutas.length) {
// alert("introduce el número correcto! Debe ser menor que: " + frutas.length)
// } else {
// alert(frutas[elemento]);
// }

// console.log(frutas.length);

// for (var i = 0; i < frutas.length; i++) {
//     document.write(frutas[i] + "</br>")
// }

frutas.forEach((frutas, index, data) => {
    document.write("Este es el index " + index + " del Array. Y corresponde a la fruta: " + frutas + "</br>")

    console.log(data);
});