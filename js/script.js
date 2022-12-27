////////////////////////////////////
//  Make mobile navigation work

const btnNavEl = document.querySelector(".mobile-menu-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
