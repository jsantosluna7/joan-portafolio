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

// LANGUAGE

i18next.init({
  lng: "es",
  debug: true,
  resources: {
    en: {
      translation: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        download_btn: "Download CV",
        title_pres: "I'm",
        about_txt: "Full Stack developer with experience in technologies such as HTML5, CSS, JavaScript, TypeScript, C#, Angular, Bootstrap and .NET Core, as well as handling SQL-Server and Firebase databases. Passionate about creating efficient and well-designed solutions, I look for opportunities to contribute my skills and continue growing professionally.",
        contact_txt: "Contact me!",
        scroll_txt: "Scroll Down"
      },
    },
    es: {
      translation: {
        nav_home: "Inicio",
        nav_about: "Sobre",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        download_btn: "Descargar CV",
        title_pres: "Soy",
        about_txt: " Desarrollador FullStack con experiencia en tecnologías como HTML5, CSS, JavaScript, TypeScript, C#, Angular, Bootstrap y .NET Core, además de manejo de bases de datos SQL-Server y Firebase. Apasionado por crear soluciones eficientes y con buen diseño, busco oportunidades para aportar mis habilidades y seguir creciendo profesionalmente.",
        contact_txt: "¡Contactame!",
        scroll_txt: "Desplazate"
      },
    }
  },
}, function(err, t){
  updateContent();
});

function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = i18next.t(key);
  });
  
  // Actualizar el texto del botón
  document.getElementById('toggleLanguage').textContent = i18next.t('toggleLanguage');
}