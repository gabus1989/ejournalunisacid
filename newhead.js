var newhead = document.getElementById("navnewhead");
var body = document.body;
body.insertBefore(newhead, body.childNodes[0]);
document.getElementById("content").children[0].style.display = "none";

document.getElementById("menubutton").addEventListener("click", function(){
  document.getElementById("newhead").innerHTML = "Hello World";
});

var breadcrumb = document.getElementById("breadcrumb");
var ulnewnav = document.getElementById("ulnewnav");
ulnewnav.insertBefore(breadcrumb, ulnewnav.childNodes[0]);
