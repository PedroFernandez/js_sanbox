$(document).ready(function () {
   console.log("Hey this 04 page loads pretty well!");

    $('#show').click(function () {
        $(this).hide();
        $('#hide').show();
        $('#box').fadeIn('slow');
    });

    $('#hide').click(function () {
        $(this).hide();
        $('#show').show();
        $('#box').fadeOut('slow');
    });
});