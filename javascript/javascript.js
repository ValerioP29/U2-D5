document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded correctly");

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const heroSection = document.querySelector(".hero");
    const heroSectionHeight = heroSection.offsetHeight;

    if (header && heroSection) {
      if (window.scrollY > heroSectionHeight - header.offsetHeight) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    } else {
      console.error("Elementi header o hero non trovati.");
    }
  });
});
