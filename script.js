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
})

close.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.remove("active");
  close.style.display = "none";
  menu.style.display = "block";
})

let btn = document.getElementById("btn");
let hide = document.querySelector(".hide");

btn.addEventListener("click", () => {
  if (hide.style.display === "none") {
    hide.style.display = "flex";
  };
})
{
  // let link = document.getElementById("link");
  let navlink = document.getElementsByClassName("navbar-item");
  // let navbarLink = link.getElementsByClassName("navbar-item");
  function activate(event){
    // navlink.classList.toggle("active");
    for (nav_link of navlink) {
      nav_link.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  }
}

// code for the database using google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz9KTt5tSrRV_RWi8Pi9yMMwkn4xm7WoPnZNbNgAcPRzdmlxAtrejx5GGc5l_LDrEav/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const subject = document.getElementById("subject");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (subject.value == "") {
    alert("Message box can't be empty!");
  }
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent Successfully...";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});