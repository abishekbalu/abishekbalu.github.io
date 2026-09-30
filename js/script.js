// script.js

const mobileViewNavBar = document.getElementById('mobile-view-nav-bar');
const navBar = document.getElementById('nav-bar-menu');
const centeredNav = document.getElementById('centered-nav');


mobileViewNavBar.addEventListener('click', () => {
  navBar.classList.toggle('active');
  centeredNav.classList.toggle('active');
});

