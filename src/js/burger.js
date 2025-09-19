let iconMenu = document.querySelector(".img_burgermenu");
let list = document.querySelector(".ul_header");
let nav = document.querySelector(".nav_header");
let header = document.querySelector(".header");
let btn = document.querySelector(".burger_menu");
const closeMenu = document.querySelector(".img_closemenu");
header.style.alignItems = "start";
closeMenu.style.display = "none";
function addMenu() {
  if (list.classList.contains("active")) {
    list.classList.remove("active");
    nav.style.width = "100%";
    btn.classList.remove("rotate");
    closeMenu.style.display = "none";
    iconMenu.style.display = "block";
  } else {
    closeMenu.style.display = "block";
    iconMenu.style.display = "none";

    list.classList.add("active");
    nav.style.width = "100%";
    btn.classList.add("rotate");
  }
}

btn.addEventListener("click", addMenu);
