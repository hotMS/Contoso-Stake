// Hide initial content
$(".row, .subheader").css("display", "none");

var place_holder = document.createElement('div');
place_holder.className = "place_holder";

$("nav").after(place_holder);
$(window).on('load', function() {
    // Remove all unwanted content
    $(".row").remove();

    console.log("done");
});