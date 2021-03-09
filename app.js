// nav toggle
const navToggle = document.querySelector(".nav-toggle span");
const topNav = document.querySelector(".header .topnav");
const navLinks = topNav.querySelectorAll("ul li");

navToggle.addEventListener("click", function() {
  topNav.classList.toggle("open");
});

// close navbar when link is clicked on mobile
navLinks.forEach(navLink => {
  navLink.addEventListener("click", function() {
    topNav.classList.remove("open");
  });
});

// faq
const questions = document.querySelectorAll(".question-card");
questions.forEach(question => {
  const questionBtn = question.querySelector(".question-btn");
  questionBtn.addEventListener("click", function() {
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
