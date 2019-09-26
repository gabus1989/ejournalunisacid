var newhead = document.getElementById("navnewhead");
var body = document.body;
body.insertBefore(newhead, body.childNodes[0]);
document.getElementById("content").children[0].style.display = "none";

var element = document.getElementById("divmenupanel"),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue("display");

alert(top);
