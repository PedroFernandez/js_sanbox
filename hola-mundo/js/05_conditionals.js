'use strict'

// if
var age1 = 43;
var age2 = 6;
var age3 = 4;

if(age1 > age2 && age2 > age3){
    console.log("Paso por el if");
} else if (age2 > age3){
    console.log("Paso por el if else")
} else {
    console.log("Paso por el else")
}

// Logic Operators
// AND &&
// OR ||
// Negate !

var year = 1977;
if(year != 2016){
    console.log("Year is not 2016")
}

var current_year = 2020;
if(year >= 1980 || (current_year == 2020 && current_year > year)) {
    console.log("condition is meeting criteria");
} else {
    console.log("condition is not meeting criteria")
}

// SWITCH
