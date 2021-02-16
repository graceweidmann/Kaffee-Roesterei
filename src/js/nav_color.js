var x = document.getElementsByClassName("nav-link");
var y = x.getElementsByTagName("a");
var z = document.getElementsByClassName("bg_light");


function navColor () {
if (z.matches("bg_light")) {
var i;
for (i = 0; i < y.length; i++) {
  y[i].style.Color = "black";
}

}y.style.Color = "white";
}
navColor();

