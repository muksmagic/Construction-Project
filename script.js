// Select menu elements
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Close mobile menu when a link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});