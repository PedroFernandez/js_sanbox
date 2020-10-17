'use strict'

// Localstorage
// ensure browser is compatible with LocalStorage

if(typeof(Storage) !== "undefined"){
    console.log('local storage available');
} else {
    console.log('local storage is not available');
}

// Save Data
localStorage.setItem('title', 'Man on the moon');

// Retrieve Data
localStorage.getItem('title');

let paragraph = document.createElement('p');

paragraph.append(localStorage.getItem('title'));
document.querySelector("#songs").append(paragraph);

let user = {
    name: "Paula",
    surname: "Fernandez",
    email: "paula.fdez@gmail.com"
}

localStorage.setItem('user', JSON.stringify(user));

// Retrieve Object
// console.log(JSON.parse(localStorage.getItem('user')));
var user2 = JSON.parse(localStorage.getItem('user'));

user2.name = "Marta";

console.log(user2);