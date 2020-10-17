'use strict'

let users_div = document.querySelector("#users");
let second_user = document.querySelector("#second_user");
let developer_user = document.querySelector("#developer_user");
let loader = document.querySelector(".loading");

getUsers()
    .then(data => data.json())
    .then(users => {
        listUsers(users);

        return getDeveloperData();
    })
    .then(data => {
        //console.log(data)
        listDeveloper(data)
        return getSecondUser();
    })
    .then(data => data.json())
    .then(janet => {
        listSecondUser(janet)
        }
    );

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users');    
}

function listUsers(users) {
    users.map((users, i) => {
        //console.log(users.name);

        let name = document.createElement('li');
        name.innerHTML = i + " - " + users.name;
        users_div.appendChild(name);

        loader.style.display = "none";
    })
}

function getSecondUser() {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            return resolve(fetch('https://jsonplaceholder.typicode.com/users/2'));
        }, 3000)

    });
    // https://jsonplaceholder.typicode.com/users/2
}

function listSecondUser(users) {
    let name = document.createElement('li');
    let surname = document.createElement('li');
    name.innerHTML = users.name;
    surname.innerHTML = users.username;
    second_user.appendChild(name);
    second_user.appendChild(surname);

    document.querySelector("#second_user .loading").style.display = "none";
}

function getDeveloperData() {
    let developer = {
        name: "Pedro",
        surname: "Fernandez",
        programming_languages: "php, javascript",
        years_of_experience: 15
    }

    return new Promise((resolve, reject) => {
        let developer_string = '';
        setTimeout(function () {
            developer_string = JSON.stringify(developer);
            if (typeof developer_string != "string" || developer_string == '') return reject("error");

            return resolve(developer_string);
        }, 3000)
    });
}

function listDeveloper(developer) {

    // console.log(developer);

    let developer_list = document.createElement('li');

    developer_list.innerHTML = developer;

    developer_user.appendChild(developer_list);

    document.querySelector("#developer_user .loading").style.display = "none";
}