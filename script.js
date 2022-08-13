const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
  body.classList.remove("no-scroll");
});
openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
  body.classList.add("no-scroll");
  console.log(body);
});
