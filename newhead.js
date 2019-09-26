var newhead = document.getElementById("navnewhead");
var body = document.body;
body.insertBefore(newhead, body.childNodes[0]);
document.getElementById("content").children[0].style.display = "none";

document.getElementById("menubutton").addEventListener("click", function(){
  document.getElementById("ulnewnav").style.display = "none";
  document.getElementById("ulnewnav").style.backgroundColor = "#21a7ac";  
});
