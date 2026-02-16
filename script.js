
/*
function responsiveNavBar() {
  var nav = document.getElementById("responsiveNavBar");
  nav.classList.toggle("responsive");
}*/

const mobileNav = document.querySelector(".linedNav");
const navbar = document.querySelector(".menubar");

mobileNav.addEventListener("click", () => toggleNav());

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classsList.toggle("linedNav-active");
};
