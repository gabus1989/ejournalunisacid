var newhead = document.getElementById("navnewhead");
var body = document.body;
body.insertBefore(newhead, body.childNodes[0]);
document.getElementById("content").children[0].style.display = "none";

var element = document.getElementById("divmenupanel");
var style = window.getComputedStyle(element, null);
var top = style.getPropertyValue("display");

var elem = document.getElementById("divmenupanel");
var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("display");

alert(theCSSprop);
