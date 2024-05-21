window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

let tab_link = document.getElementsByClassName("tab-links");
let tab_contents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tab_link) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tab_contents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

let nav = document.querySelector(".navbar-content");
let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let close = document.getElementById("close");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", (e) => {
  nav.classList.toggle("active", true);
  menu.style.display = "none";
  close.style.display = "flex";
  navbar.style.background = "rgba(8, 8, 8, 0.8)";
  console.log("clicked")
})

close.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.remove("active");
  close.style.display = "none";
  menu.style.display = "block";
})