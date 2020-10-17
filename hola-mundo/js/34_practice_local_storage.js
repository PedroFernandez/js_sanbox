'use strict'

var form = document.querySelector("#filmForms");

form.addEventListener("submit", function () {
    var title = document.querySelector("#addFilm").value;
        if(title.length >= 1) {
        localStorage.setItem(title, title);
    }
});

var ul = document.querySelector("#films_list");
for (let i in localStorage) {
    if(typeof localStorage[i] == 'string') {
        console.log(localStorage[i]);
        let li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}
