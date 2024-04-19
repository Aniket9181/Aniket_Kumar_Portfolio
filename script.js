// ****************************toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav_option");

menuIcon.onclick = () => {
  console.log("menu icon clicked");
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// //****************************Scroll section active link */

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
console.log(sections);
console.log(navlinks);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Remove active class from all navlinks
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to the corresponding navlink
      document
        .querySelector("header nav a[href='#" + id + "']")
        .classList.add("active");
    }
  });

  // **************************************sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  // ***************************************remove toggle icon and Navbar
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// *************************************Scroll Reveal

ScrollReveal({
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(
  ".left,.contact-heading, .project-heading, .tech-skills-heading, .about_heading",
  { origin: "top" }
);
ScrollReveal().reveal(".footer, .project, .skills-cont", { origin: "bottom" });
ScrollReveal().reveal(".about-img, .left-side", { origin: "left" });
ScrollReveal().reveal(".right ,.about-content, .right-side", {
  origin: "right",
});

// **************************************Typed Js

// , "Backend Developer", "FullStack Developer"
const typed = new Typed("#element", {
  strings: ["Frontend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 200,
  loop: true,
});
