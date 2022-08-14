const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");
const body = document.querySelector("footer");
closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
  document.documentElement.style.overflowY = "";
});
openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
  body.classList.add("no-scroll");
  document.documentElement.style.overflowY = "hidden";
});
