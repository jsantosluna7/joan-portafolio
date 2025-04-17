// LANGUAGE

let language = localStorage.getItem('language');
let currentLanguage = '';

if(language){
  currentLanguage = language;
}else{
  currentLanguage = 'es'
}

i18next.init({
  lng: currentLanguage,
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
        scroll_txt: "Scroll Down",
        about_subt: "Get to Know Me",
        about_title: "About Me",
        about_edu: "Education",
        about_edu2: "Software Development",
        about_cer: "Certifications",
        about_cer2: "JavaScript Intermediate",
        about_cer3: "Front-End With Angular",
        skills_subt: "Explore My",
        skills_title: "Skills",
        skills_sub: "Frontend Development",
        skills_sub2: "Backend Development",
        projects_subt: "Browse My Recent",
        projects_title: "Projects",
        contact_subt: "Get in Touch",
        contact_title: "Contact Me",
        footer_txt: "Copyright ©; 2025 Joan Santos. All Rights Reserved.",
        sp: "Spanish",
        en: "English"
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
        scroll_txt: "Desplazate",
        about_subt: "Conoceme",
        about_title: "Sobre Mi",
        about_edu: "Educación",
        about_edu2: "Desarrollo de Software",
        about_cer: "Certificaciones",
        about_cer2: "JavaScript Intermedio",
        about_cer3: "Front-End Con Angular",
        skills_subt: "Explora Mis",
        skills_title: "Habilidades",
        skills_sub: "Desarrollo Frontend",
        skills_sub2: "Desarrollo Backend",
        projects_subt: "Ve Mis Recientes",
        projects_title: "Proyectos",
        contact_subt: "Hablemos",
        contact_title: "Contactame",
        footer_txt: "Copyright ©; 2025 Joan Santos. Todos los derechos reservados.",
        sp: "Español",
        en: "Ingles"
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
}

//FLAGS
const spBtn = document.getElementById('spanishBtn');
const enBtn = document.getElementById('englishBtn');
const seLang1 = document.querySelector('.selected-lang-1');
const seLang2 = document.querySelector('.selected-lang-2');


// SET CURRENT FLAG
let currentFlang = localStorage.getItem('class');
seLang1.classList.add(currentFlang);
seLang2.classList.add(currentFlang);


// LANGUAGE FUNCTION

function languages(addClass, removeClass, language){
  //Cambiar el boton principal
  seLang1.classList.add(addClass);
  seLang1.classList.remove(removeClass);
  
  seLang2.classList.add(addClass);
  seLang2.classList.remove(removeClass);
  localStorage.setItem('language', language);
  localStorage.setItem('class', addClass);

  //Cambiar idioma
  i18next.changeLanguage(language, (err, t) => {
    if(err) return console.error('Error al cambiar el idioma', err);
    updateContent();
  })
}

//LANGUAGES BUTTONS
function spanishBtn(){
  languages('es-lang', 'us-lang', 'es');
}

function englishBtn() {
  languages('us-lang', 'es-lang', 'en');
}