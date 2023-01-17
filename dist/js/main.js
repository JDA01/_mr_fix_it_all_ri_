// HAMBURGER MENU BTN
const burgerBtn = document.querySelector(".burger");
// MENU
const menu = document.querySelector(".menu");
const navItems = document.querySelectorAll(".menu > li");

//HAMBURGER BTN ANIMATION
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("menuOpen");
});

// REMOVE MENU ACTIVE CLASS
const clearActiveClass = () => {
  navItems.forEach((item) => {
    item.classList.remove("active-link");
  });
};

// ADD MENU ACTIVE CLASS
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    clearActiveClass();
    item.classList.add("active-link");
  });
});

// ANIMATION ON SCROLL
AOS.init({
  duration: 700,
});

//IMAGE CAROUSEL
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let interval;

function startSlider() {
  interval = setInterval(() => {
    plusSlides(1);
  }, 2000);
}

function stopSlider() {
  clearInterval(interval);
}

function plusSlides(n) {
  // stopSlider();
  currentSlide = (currentSlide + n) % slides.length;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[currentSlide].style.opacity = 1;
  // startSlider();
}

startSlider();

slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", startSlider);

if (window.screen.width <= 500) {
  // Get the navbar
  let navbar = document.getElementById("navbar");
  // Add the event listener
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    let scrollPos = window.pageYOffset || document.body.scrollTop;
    let scroll = false;

    // If the scroll position is greater than 50px, hide the navbar
    if (scrollPos > 100) {
      navbar.classList.add("hide-navbar");
    } else {
      navbar.classList.remove("hide-navbar");
    }
  });
}
