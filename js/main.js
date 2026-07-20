// Shared JS for all pages

// ─── Scroll in cima ad ogni caricamento pagina ───
window.scrollTo(0, 0);

// ─── Navbar scroll ───
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ─── Burger menu ───
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const navClose = document.getElementById('nav-close');

function closeNav() {
  burger && burger.classList.remove('open');
  navLinks && navLinks.classList.remove('open');
  burger && burger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
  document.body.style.overflow = '';
}

if (burger && navLinks) {
  burger.setAttribute('aria-expanded', 'false');
  burger.addEventListener('click', () => {
    const willOpen = !navLinks.classList.contains('open');
    burger.classList.toggle('open', willOpen);
    navLinks.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    document.body.classList.toggle('nav-open', willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}
if (navClose) navClose.addEventListener('click', closeNav);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav();
});

// ─── Reveal on scroll ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ─── Active nav link ───
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar__links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ─── Numeri che contano (count-up) ───
const statNums = document.querySelectorAll('.stat-num');
if (statNums.length) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      statObserver.unobserve(el);
      const target = parseFloat(el.dataset.target);
      const decimals = parseInt(el.dataset.decimal || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));
}

// ─── Parallax leggero (solo desktop, rispetta prefers-reduced-motion) ───
const parallaxEls = document.querySelectorAll('[data-parallax]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (parallaxEls.length && !prefersReducedMotion && window.innerWidth > 760) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
      ticking = false;
    });
  }, { passive: true });
}
