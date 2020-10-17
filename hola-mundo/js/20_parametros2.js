'use strict'

// parámetros REST y SPREAD

function listadosFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log("Resto de Frutas: " + restoDeFrutas);
}

// listadosFrutas("manzana", "pera", "sandia", "melon", "coco", "piña", "naranja");

var frutas = ['ciruela', 'higos', 'melocoton'];
listadosFrutas(...frutas, "pera", "sandia", "melon", "coco", "piña", "naranja");
