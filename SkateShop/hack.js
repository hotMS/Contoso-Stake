var node = document.createElement("LI"); // Create a <li> node
var textnode = document.createTextNode("Water"); // Create a text node
node.appendChild(textnode); // Append the text to <li>
document.getElementsByClassName("class=top-bar-section").appendChild(node); // Append <li> to <ul> with id="myList"


document.getElementsByClassName("class=top-bar-section").appendChild(node);