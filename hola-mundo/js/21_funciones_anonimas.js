'use strict'
console.log("funciones anonimas");

// funcion anonima -> no tiene nombre


function sum(num1, num2, sumAndShow, sumByTwo) {
    var sum = num1 + num2;

    sumAndShow(sum);
    sumByTwo(sum);

    return sum;
}

sum(2, 4, data => {
    console.log(data)
}, data => {
    console.log("Sum By Two", data * 2)
});