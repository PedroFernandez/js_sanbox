$(document).ready(function () {
    console.log("eventos cargados");

    // Mouse Over and Out

    const box = $('#box');

    box.mouseover(function () {
       $(this).css("background", "green")
    });

    box.mouseout(function () {
        $(this).css("background", "red")
    });
});