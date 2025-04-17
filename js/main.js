window.addEventListener("DOMContentLoaded", () => {});

// COPY TO CLIPBOARD

function textClip() {
  const a = document.getElementById("a-clip");
  const textContent = a.textContent;

  // Usando la nueva api de clipboard
  navigator.clipboard
    .writeText(textContent)
    .then(() => {
      a.innerHTML = "";
      a.innerHTML = "Texto copiado";

      setTimeout(() => {
        a.innerHTML = "";
        a.innerHTML = "jsantosluna06@gmail.com";
      }, 3000);
    })
    .catch((err) => {
      console.error("Error al copiar en el clipboard", err);
    });
}

function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// ADD SHADOW TO NAVBAR ON SCROLL

window.onscroll = () => {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = " 0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.boxShadow = "70px";
  } else {
    navHeader.style.boxShadow = " none";
    navHeader.style.height = "90px";
    navHeader.style.boxShadow = "90px";
  }
}

// TYPEDJS

var typingEffect = new Typed(".typedText", {
  strings: ["Front-end", "Back-end", "Dominican"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// SCROLLREVEAL
const sr = ScrollReveal({
  distance: "80px",
  duration: 2000,
  reset: true,
});

// HOME
sr.reveal(".featured-text-card", { origin: "top" });
sr.reveal(".featured-name", { origin: "top", delay: 100 });
sr.reveal(".featured-text-info", { origin: "top", delay: 200 });
sr.reveal(".featured-text-btn", { origin: "top", delay: 200 });
sr.reveal(".social_icons", { origin: "top", delay: 200 });
sr.reveal(".featured-image", { origin: "top", delay: 300 });

// HEADER
sr.reveal(".section_text_p1", { origin: "top" });
sr.reveal(".title", { origin: "top" });

// PROJECTS
sr.reveal(".color-container", { interval: 200 });

// CONTACT
sr.reveal(".contact-info-upper-container", { delay: 200, origin: "top" });

// FOOTER
sr.reveal(".main-footer", { delay: 100, origin: "bottom" });

// LEFT
sr.reveal(".left-container", { delay: 100, origin: "left" });

// RIGHT
sr.reveal(".right-container", { delay: 100, origin: "right" });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);