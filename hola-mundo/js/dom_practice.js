'use strict'

window.addEventListener('load', function(){
    console.log("DOM Loaded!");
    var form = document.querySelector("#form");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    form.addEventListener('submit', function () {
        console.log("Event submit captured!");

        var first_name = document.querySelector("#first_name").value;
        var surname = document.querySelector("#surname").value;
        var age = parseInt(document.querySelector("#age").value);

        if (first_name.trim().length == 0 || first_name.trim() == null){
            alert('A first name should be provided!');
            document.querySelector("#error_name").innerHTML = "Incorrect name provided. It cannot be empty!"
            return false;
        } else {
            document.querySelector("#error_name").style.display = "none";
        }

        if (surname.trim().length == 0 || surname.trim() == null){
            alert('A surname should be provided!');
            return false;
        }

        if (age <= 0 || age == null || isNaN(age)){
            alert('Age be provided!');
            return false;
        }

        box_dashed.style.display = "block";
        var user_data = [first_name, surname, age];
        
        for (let index in user_data){
            let paragraph = document.createElement("p");
            paragraph.append(user_data[index]);
            box_dashed.append(paragraph);
        }

    });
});