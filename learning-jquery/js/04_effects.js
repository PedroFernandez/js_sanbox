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
        $('#box').fadeTo('slow', 0.2, function () {
            console.log("Hidden Box")
        });
    });

    $('#all').click(function () {
        $('#box').fadeToggle('fast');
    });

    $('#moveMe').click(function () {
        $('#box').animate({
            marginLeft: '500px',
            height:      '110px',
            fontSize:    '40px'
        }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '200px'
            })
            .animate({
                marginLeft: '10px'
            })
            .animate({
                marginTop: '15px',
                height:    '50px',
                border:     '5px dashed black',
                background: '#ccc',
                fontSize:   '19px'
            });
    })
});