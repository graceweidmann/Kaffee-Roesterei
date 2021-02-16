
function myFunction(x) {
    if (x.matches) { // If media query matches
     document.querySelectorAll("nav-link > a").style.color = "$black";}
    document.querySelectorAll("nav-link > a").style.color = "$white";
    }
  
  
  var x = document.querySelectorAll("bg_light")
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
  