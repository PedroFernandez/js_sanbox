'use strict'

var categories = ['action', 'terror', 'comedy', 'documentary'];
var films = ['Alien 8', 'The Eye', 'The Last Dance', 'Love Actually'];

var cinema = [categories, films];

// console.log(cinema);
// console.log(cinema[1][0]);

// var newFilm = " ";
//
// do{
//     newFilm = prompt("Please, enter new film. Enter 'END' when you are done!");
//     films.push(newFilm);
// }while(newFilm != "END");

// films.pop();
//
// var films_string = films.join();
// console.log(films_string);

var chain = "Pedro, Helena, Marta, Paula";
var chain_array = chain.split(", ");
console.log(chain_array);

for(let category in categories) {
    document.write("<li>" + categories[category] + "</li>");
}

// var search = films.find(function (films) {
//     return films == 'Alien 8';
// });

var search = films.find(films =>  films == 'Alien 8');
console.log(search)
