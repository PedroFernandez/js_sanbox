$(document).ready(function () {
   console.log("Hey this 04 page loads pretty well!");

    $('#show').click(function () {
        $(this).hide();
        $('#hide').show();
        // $('#box').fadeIn('slow');
        $('#box').fadeTo('slow', 0.8);
    });

    $('#hide').click(function () {
        $(this).hide();
        $('#show').show();
        // $('#box').fadeOut('slow');
        $('#box').fadeTo('slow', 0.2);
    });

    $('#all').click(function () {
        $('#box').fadeToggle('fast');
    });
});