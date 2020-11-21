$(document).ready(function () {
   console.log("Hey, AJAX Practice page load smoothly :) ");

    // $('#data').load('https://reqres.in/');

    // GET
    // $.get('https://reqres.in/api/users', {page: 2}, function (response) {
    //
    //
    //     response.data.forEach((element, index) => {
    //         console.log("First name is: " + element.first_name);
    //
    //         $('#data').append('<p> First name is: ' + element.first_name + '</p>');
    //
    //     });
    //
    // });


    // POST
    $('#formulario').submit(function (e) {
        e.preventDefault();
        var user = {
            name: $('input[name="name"]'),
            surname: $('input[name="surname"]'),
            web: $('input[name="web"]'),
        };

        console.log('inside the submit');

        $.post($(this).attr("action"), user, function (response) {
            console.log(response)
        });


        // $.ajax({
        //     type: 'POST',
        //     url: $(this).attr("action"),
        //     data: user,
        //     beforeSend: function(){
        //         console.log('Data is going to be sent...');
        //     },
        //     success: function(response){
        //         console.log(response);
        //     },
        //     error: function(){
        //         console.log('An error has occurred!')
        //     },
        //     timeout: 1000
        // });

        return false;
    })
});