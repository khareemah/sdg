// nav toggle
const navToggle = document.querySelector(".nav-toggle span");
const topNav = document.querySelector(".header .topnav");
navToggle.addEventListener("click", function() {
  topNav.classList.toggle("open");
});

// fixed navbar
const header = document.querySelector(".header");
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 200) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
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
