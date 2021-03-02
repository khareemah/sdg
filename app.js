const navToggle = document.querySelector(".nav-toggle span");
const topNav = document.querySelector(".header .topnav");
navToggle.addEventListener("click", function() {
  topNav.classList.toggle("open");
});
