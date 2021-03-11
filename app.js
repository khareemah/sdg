// nav toggle
const navToggle = document.querySelector(".nav-toggle span");
const topNav = document.querySelector(".header .topnav");
const ul = topNav.querySelector("ul");
const navLinks = topNav.querySelectorAll("ul li");

// toggle nav on small device
navToggle.addEventListener("click", function() {
  ulHeight = ul.getBoundingClientRect().height;
  topNavHeight = topNav.getBoundingClientRect().height;
  if (topNavHeight == 0) {
    topNav.style.height = `${ulHeight}px`;
  } else {
    topNav.style.height = 0;
  }
});

// set scroll links to hrefs
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(scrollLink => {
  scrollLink.addEventListener("click", function(e) {
    e.preventDefault();
    const href = scrollLink.getAttribute("href").slice(1);
    const target = document.getElementById(href);
    const topNavHeight = topNav.getBoundingClientRect().height;

    const headerHeight = document
      .querySelector(".header")
      .getBoundingClientRect().height;
    let position = target.offsetTop - headerHeight;
    if (headerHeight > 82) {
      position = position + topNavHeight;
    }
    window.scrollTo({
      top: position,
      left: 0
    });
    topNav.style.height = 0;
  });
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

// footer date
const year = document.querySelector("footer .year");
year.innerHTML = new Date().getFullYear();
