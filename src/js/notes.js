import throttle from 'lodash/throttle'

class StickyHeader {
    constructor () {
        this.nav = document.querySelector (".bg_light")
        this.events =
    }

    events () {
        window.addEventListener ("scroll", throttle (() =>this.runOnScroll(), 200))
    } 
runOnScroll () {
    if this.
    
    
    (window.scrollY > 60) {
this.nav.classList.add("nav--dark")
    } else {
this.nav.classList.remove("nav--dark")
    }
}

}

let div = document.querySelectorAll('bg_dark');
div.classList.contains('warning'); // true 



export default  StickyHeader

//

function setCSS(eleID) {
    var currTabElem = document.getElementById(eleID);

    currTabElem.setAttribute("class", "some_class_name");
    currTabElem.setAttribute("className", "some_class_name");
}

   //

   var element = document.getElementById("myElement");
   if (element.matches(".container")) {
     element.innerHTML = "This element matches the \".container\" CSS selector";
   } else {
     element.innerHTML = "This element does not match the \".container\" CSS selector";
   }
//


// const
function myFunction() {
    var x, i;
    x = document.querySelectorAll(".example");
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "red";
    }

    //


//     Example
// Get all elements with both the "example" and "color" classes:

var x = document.getElementsByClassName("example color");


  //  Example
//Change the background color of all elements with class="example"://

var x = document.getElementsByClassName("example");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}

// Set the background color of the first <p> element with class="example" (index 0)

element.setAttribute("style", "color: red;");



//     Example
var element = document.getElementById("myElement");
if (element.matches(".container, .wrapper")) {
  element.innerHTML = "This element matches either the \".container\" CSS selector or the \".wrapper\" selector.";
} else {
  element.innerHTML = "This element does not match any of the selectors.";
}
// const toggle = document.querySelector(".toggle");
// const menu = document.querySelector(".menu");
// const items = document.querySelectorAll(".item");

// /* Toggle mobile menu */
// function toggleMenu() {
//   if (menu.classList.contains("active")) {
//     menu.classList.remove("active");
//     toggle.querySelector("a").innerHTML = "<'&#9776'></i>";
//   } else {
//     menu.classList.add("active");
//     toggle.querySelector("a").innerHTML = "<'&times'></i>";
//   }
// }

// /* Activate Submenu */
// function toggleItem() {
//   if (this.classList.contains("submenu-active")) {
//     this.classList.remove("submenu-active");
//   } else if (menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active");
//     this.classList.add("submenu-active");
//   } else {
//     this.classList.add("submenu-active");
//   }
// }

// /* Close Submenu From Anywhere */
// function closeSubmenu(e) {
//   let isClickInside = menu.contains(e.target);

//   if (!isClickInside && menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active");
//   }
// }
// /* Event Listeners */
// toggle.addEventListener("click", toggleMenu, false);
// for (let item of items) {
//   if (item.querySelector(".submenu")) {
//     item.addEventListener("click", toggleItem, false);
//   }
//   item.addEventListener("keypress", toggleItem, false);
// }
// document.addEventListener("click", closeSubmenu, false);