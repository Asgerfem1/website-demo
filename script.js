// JavaScript for toggling the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
  
    hamburgerMenu.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });