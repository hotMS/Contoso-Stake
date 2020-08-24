// Hide initial content
$(".row, .subheader").css("display", "none");

var place_holder = document.createElement('div');
place_holder.className = "place_holder";

$(".push").before(place_holder);
$(window).on('load', function() {
    // Hide after content
    $(".row").remove();

    console.log("done");
});