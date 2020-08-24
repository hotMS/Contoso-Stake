$(".row, .subheader").css("display", "none");
$(window).on('load', function() {
    $(".row, .subheader").remove();
    console.log("done");
});