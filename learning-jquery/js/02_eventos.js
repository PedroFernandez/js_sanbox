$(document).ready(function () {
    console.log("eventos cargados");

    // Mouse Over and Out

    const box = $('#box');
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
    var data = $("#data");

    // console.log(name);

    name.focus(function () {
        $(this).css("border", "2px solid green")
    });

    name.blur(function () {
        $(this).css("border", "2px solid transparent");

        $("#data").show()
            .text($(this).val());
    });

    // Mousedown, mouseup
    data.mousedown(function () {
       $(this).css("border-color", "gray")
    });

    data.mouseup(function () {
        $(this).css("border-color", "pink")
    });

    // Mousemove
    $(document).mousemove(function () {
       console.log("Client X" + event.clientX);
       console.log("Client Y" + event.clientY);
    });
});