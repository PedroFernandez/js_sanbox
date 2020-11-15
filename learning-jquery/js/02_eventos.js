$(document).ready(function () {
    console.log("eventos cargados");

    // Mouse Over and Out

    const box = $('#box');

    // box.mouseover(function () {
    //    $(this).css("background", "green")
    // });
    //
    // box.mouseout(function () {
    //     $(this).css("background", "red")
    // });


    function changeColorToGreen(){
        $(this).css("background", "green")
    }

    function changeColorToRed() {
        $(this).css("background", "red")
    }

    // Hover
    box.hover(changeColorToGreen, changeColorToRed)

    box.click(function () {
       $(this).css("background", "black")
              .css("color", "white")
    });

    // box.ondblclick

    box.dblclick(function () {
        $(this).css("background", "white")
            .css("color", "black")
    });

    var name = $("#name");

    // console.log(name);

    name.focus(function () {
        $(this).css("border", "2px solid green")
    });

    name.blur(function () {
        $(this).css("border", "2px solid transparent");

        $("#data").show()
            .text($(this).val());
    });
});