

// ********** close links ************
const navToggle = document.querySelector(".menu-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav");
const logoColor = document.querySelector(".logo");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************
var bgLight = document.querySelectorAll("bg-light");
const contact = document.getElementById("contact");
const navbar = document.getElementById("navigation");
const navLogo = document.getElementById("nav-logo");
// const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight)
    {
    navbar.classList.add("fixed-nav");
    navLogo.setAttribute("fill","black");
  } else {
    navbar.classList.remove("fixed-nav");
    navLogo.setAttribute("fill","white")
  
  };
  // setup back to top link
  // if (navHeight > 500) {
  //   topLink.classList.add("show-link");
  // } else {
  //   topLink.classList.remove("show-link");
  // }
});

// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll(".nav-link");
// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     // prevent default
//     e.preventDefault();
//     // navigate to specific spot
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeight;

//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     if (navHeight > 82) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // close
//     linksContainer.style.height = 0;
//   });
// });