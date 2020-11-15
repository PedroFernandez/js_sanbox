$(document).ready(function () {
   console.log("Hey this page loads pretty well!");

   var box_selector = $('#box');
   var first_name_selector = $('#first_name');

   // box_selector.mouseover(function () {
   //     $(this).css('background', 'azure');
   // });
   //
   //  box_selector.mouseout(function () {
   //      $(this).css('background', 'beige');
   //  });

    function changeColorToAzure() {
        $(this).css('background', 'azure');
    }

    function changeColorToBeige() {
        $(this).css('background', 'beige');
    }


    box_selector.hover(changeColorToAzure, changeColorToBeige);

    first_name_selector.click(function () {
       $(this).css('background', 'beige');
    });

    first_name_selector.focus(function () {
        $(this).css('border', '5px solid green');
    });

    first_name_selector.blur(function () {
        $(this).css('border', '5px solid black');
        $('#data').show().text($(this).val());

        console.log($(this).val());


    })
});