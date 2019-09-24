var newhead = document.getElementById("newhead");
var body = document.body;
body.insertBefore(newhead, body.childNodes[0]);
document.getElementById("content").children[0].style.display = "none";
document.getElementById("menubutton").addEventListener("click", function(){
  document.getElementById("newhead").innerHTML = "Hello World";
});
