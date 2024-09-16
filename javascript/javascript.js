const navbar = document.getElementById("navbar");
const section = document.querySelector(".hero");
const button = document.getElementById("navbarButton");
let sectionHeight;
function calculateHeight() {
  sectionHeight = section.offsetHeight;
}
window.addEventListener("load", function () {
  calculateHeight();
});
window.onscroll = function () {
  if (window.scrollY > sectionHeight) {
    navbar.classList.add("scrolled");
    button.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    button.classList.remove("scrolled");
  }
};
