var newhead = document.getElementById("navnewhead");
var body = document.body;
body.insertBefore(newhead, body.childNodes[0]);
document.getElementById("content").children[0].style.display = "none";

document.getElementById("menubutton").addEventListener("click", function(){
  var divmenupanel = document.getElementById("divmenupanel");
  if (divmenupanel.style.display == "none") {
    divmenupanel.style.display = "block";
  } else {
    divmenupanel.style.display = "none";
  }
});
