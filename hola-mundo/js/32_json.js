'use strict'

console.log('json loaded correctly!');

var batman = {
    title: 'The Dark Knight Rises',
    genre: 'action',
    year: 2001
};

var films = [
    {
        title: 'Spiderman',
        genre: 'action',
        year: 1999
    },
    batman
];

// console.log(films);

for (let film in films) {
    console.log(films[film]);
}