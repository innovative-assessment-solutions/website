/* Innovative Assessment Solutions — Main JS */

// Set current year in footer
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Mobile nav toggle
(function mobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Smooth-scroll active nav link highlight
(function activeNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !links.length) return;

  function onScroll() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 90;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Contact form — show a friendly message (no backend wired yet)
(function contactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Message Sent!';
    btn.classList.add('btn--success');

    const note = form.querySelector('.form-note');
    if (note) {
      note.textContent = 'Thank you for reaching out! We will get back to you soon.';
      note.classList.add('form-note--success');
    }

    // Re-enable after 5 seconds
    setTimeout(function () {
      btn.disabled = false;
      btn.textContent = 'Send Message';
      btn.classList.remove('btn--success');
      form.reset();
      if (note) {
        note.textContent = '* Note: This form requires a backend service to process submissions. For immediate inquiries, please email us directly.';
        note.classList.remove('form-note--success');
      }
    }, 5000);
  });
})();
