var newhead = document.getElementById("newhead");
var body = document.body;
body.insertBefore(newhead, body.childNodes[0]);
document.getElementById("content").childNodes[0].style.display = "none";
