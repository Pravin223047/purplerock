let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navlist.classList.toggle("active");
  document.body.classList.toggle("open");
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e9206d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 100 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// scroll reveal

ScrollReveal({
  distance: "40px",
  duration: 2000,
  delay: 200,
  // reset: true ,
});

ScrollReveal().reveal(".home_info,.main-text,.proposal,.heading,.header", {
  origin: "top",
});
ScrollReveal().reveal(".about-img,.contact-info,.patners,.investors h3", {
  origin: "left",
});
ScrollReveal().reveal(".about_content", { origin: "right" });
ScrollReveal().reveal(".allNames,footer,.img-hero,.about_img", {
  origin: "bottom",
});
