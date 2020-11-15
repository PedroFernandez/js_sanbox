$(document).ready(function () {
    reloadLinks();

    setTimeout(function () {
        $('#add_button').removeAttr('disabled');
    }, 3000);

    $('#add_button')
        // .removeAttr('disabled')
        .click(function () {
            $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
            reloadLinks();
    })
});

function reloadLinks() {
    $('a').each(function (index) {
        console.log($('a').length);

        var link = $(this).attr('href');
        $(this).text(link);
    });
}