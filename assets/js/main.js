function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () {
  headerShadow()
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgb(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ==== Slider de Projetos (3 por vez) ==== */
(function () {
  const track = document.getElementById('projectsTrack');
  if (!track) return;

  const prev = document.querySelector('.proj-arrow.prev');
  const next = document.querySelector('.proj-arrow.next');

  let index = 0;

  function perView() {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 1024) return 2;
    return 3;
  }

  function gapPx() {
    const g = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '22px';
    return parseFloat(g);
  }

  // PASSO baseado no tamanho REAL do card
  function slideWidth() {
    const first = track.children[0];
    if (!first) return 0;
    const gap = gapPx();
    const w = first.getBoundingClientRect().width;
    return w + gap;
  }

  function maxIndex() {
    return Math.max(0, track.children.length - perView());
  }

  function update() {
    index = Math.min(index, maxIndex());
    const x = -index * slideWidth();
    track.style.transform = `translateX(${x}px)`;
    if (prev) prev.disabled = index <= 0;
    if (next) next.disabled = index >= maxIndex();
  }

  function go(dir) {
    index = Math.min(Math.max(index + dir, 0), maxIndex());
    update();
  }

  prev && prev.addEventListener('click', () => go(-1));
  next && next.addEventListener('click', () => go(1));
  window.addEventListener('resize', update);

  // teclado ao focar o carrossel
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
  });

  update();
})();

/* ==== Carrossel de Clientes (3 por vez) ==== */
(function () {
  const track = document.getElementById('clientsTrack');
  if (!track) return;

  const prev = document.querySelector('.cli-arrow.prev');
  const next = document.querySelector('.cli-arrow.next');
  let index = 0;

  function perView() {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 1024) return 2;
    return 3;
  }

  function gapPx() {
    const g = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '18px';
    return parseFloat(g);
  }

  // PASSO baseado no tamanho REAL do card
  function slideWidth() {
    const first = track.children[0];
    if (!first) return 0;
    const gap = gapPx();
    const w = first.getBoundingClientRect().width;
    return w + gap;
  }

  function maxIndex() {
    return Math.max(0, track.children.length - perView());
  }

  function update() {
    index = Math.min(index, maxIndex());
    const x = -index * slideWidth();
    track.style.transform = `translateX(${x}px)`;
    if (prev) prev.disabled = index <= 0;
    if (next) next.disabled = index >= maxIndex();
  }

  function go(dir) {
    index = Math.min(Math.max(index + dir, 0), maxIndex());
    update();
  }

  prev && prev.addEventListener('click', () => go(-1));
  next && next.addEventListener('click', () => go(1));
  window.addEventListener('resize', update);

  // teclado ao focar a área
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
  });

  update();
})();

/* ------- Typing Effect -------*/
var typingEffect = new Typed(".typedText", {
  strings: ["Dev Front-End", "UX | UI Designer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})

/* ------- Scroll reveal animation -------*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* ------- Início -------*/
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {
  delay: 100
})
sr.reveal('.featured-text-info', {
  delay: 200
})
sr.reveal('.featured-text-btn', {
  delay: 200
})
sr.reveal('.social_icons', {
  delay: 200
})
sr.reveal('.featured-image', {
  delay: 300
})

/* ------- Project Box -------*/
try { sr.clean('.project-box'); } catch(e) {}

/* ------- Headings -------*/
sr.reveal('.top-header', {})

/* ------- About Info & Contact Info -------*/
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
sr.reveal('.about-info', {
  delay: 100
})
sr.reveal('.contact-info', {
  delay: 100
})

/* ------- About Skills & Form Box -------*/
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})
sr.reveal('.skills-box', {
  delay: 100
})
sr.reveal('.form-control', {
  delay: 100
})

/* ------- Change Active Link -------*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
    if (!link) return;
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) link.classList.add('active-link');
    else link.classList.remove('active-link');
  });
}
window.addEventListener('scroll', scrollActive);

// Focar no campo Nome quando clicar em "Contrate-me"
document.querySelectorAll('a[href="#contact"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      const firstField = document.querySelector('#contactForm input[name="from_name"]');
      if (firstField) firstField.focus();
    }, 600);
  });
});

// === EmailJS ===
(function () {
  const PUBLIC_KEY = "ku6vC2WjvqZ4b4Myz";
  const SERVICE_ID = "service_acj6rub";
  const TEMPLATE_ID = "template_bnyiqcp";

  if (!window.emailjs) return;
  emailjs.init({
    publicKey: PUBLIC_KEY
  });

  const form = document.getElementById("contactForm");
  const submit = document.getElementById("contactSubmit");
  const status = document.getElementById("formStatus");

  function showStatus(msg, type) {
    if (!status) return;
    status.style.display = "block";
    status.textContent = msg;
    status.className = "form-status " + (type === "ok" ? "is-ok" : "is-err");
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // honeypot
      if (form.website && form.website.value) return;

      if (!submit) return;
      submit.disabled = true;
      const original = submit.innerHTML;
      submit.innerHTML = "Enviando…";

      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contactForm");
        showStatus("Mensagem enviada! Vou te responder em breve 😊", "ok");
        form.reset();
      } catch (err) {
        console.error(err);
        showStatus("Não foi possível enviar agora. Tente novamente em instantes.", "err");
      } finally {
        submit.disabled = false;
        submit.innerHTML = original;
      }
    });
  }
})();