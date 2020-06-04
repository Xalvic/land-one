const cursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li a");
let letters = document.querySelectorAll(".wrapper h3");
let boxes = document.querySelectorAll(".box-a");
let image = document.querySelectorAll(".pops");

var textPath = document.querySelector("#text-path");

var textContainer = document.querySelector("#text-container");

var path = document.querySelector(textPath.getAttribute("href"));

var pathLength = path.getTotalLength();

function updateTextPathOffset(offset) {
  textPath.setAttribute("startOffset", offset);
}

updateTextPathOffset(pathLength);

function onScroll() {
  requestAnimationFrame(function () {
    updateTextPathOffset(window.scrollY * 2.2);
  });
}

window.addEventListener("scroll", onScroll);

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("section-grow");
    link.classList.add("hover-link");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("section-grow");
    link.classList.remove("hover-link");
  });
});

letters.forEach((letter) => {
  letter.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
    letter.classList.add("hover-link");
  });
  letter.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
    letter.classList.remove("hover-link");
  });
});

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting == true) {
      entry.target.classList.add("animate-boxes");
    } else {
      entry.target.classList.remove("animate-boxes");
    }
    // console.log(entry);
  });
});

boxes.forEach((box) => {
  observer.observe(box);
  box.addEventListener("mouseover", () => {
    cursor.classList.add("image-view");
    // box.classList.add("zoom");
    // image.classList.add(".zoom img");
  });
  box.addEventListener("mouseout", () => {
    cursor.classList.remove("image-view");
    // box.classList.remove("zoom");
    // image.classList.remove(".zoom img");
  });
});
