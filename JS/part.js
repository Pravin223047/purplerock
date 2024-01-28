let primaryCursor = document.querySelector(".cursor-1");
let secondaryCursor = document.querySelector(".cursor-2");

window.onmousemove = (event) => {
  primaryCursor.style.top = event.pageY + "px";
  primaryCursor.style.left = event.pageX + "px";
  secondaryCursor.style.top = event.pageY + "px";
  secondaryCursor.style.left = event.pageX + "px";
};

let darkIcon = document.querySelector("#darkmode");

darkIcon.addEventListener("click", () => {
  darkIcon.classList.toggle("fa-sun");
  darkIcon.classList.toggle("fa-moon");
  body.classList.toggle("dark-theme");
});

let links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    primaryCursor.classList.add("active");
    secondaryCursor.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    primaryCursor.classList.remove("active");
    secondaryCursor.classList.remove("active");
  });
});

let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-x");
  navlist.classList.toggle("active");
  document.body.classList.toggle("open");
});
