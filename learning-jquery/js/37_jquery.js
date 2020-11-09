$(document).ready(function () {

    // ID Selector
    const selector_one = $("#one").css("background", "blue");
    const selector_two = $("#two").text();
    const selector_three = $("#three").text();


    // console.log(selector_one);
    // console.log(selector_two);
    // console.log(selector_three);

    // CLASS SELECTOR
    const selector_zebra = $(".zebra").add("padding", "5px");
    // const selector_no_zebra = $(".no_zebra");

    // $('.no_zebra').click(function () {
    //     console.log("Click done!");
    //    $(this).addClass('zebra');
    // });

    // console.log(selector_zebra)

    var search_element = $('#box .highlighted').eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(search_element)

});