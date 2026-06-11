
// --- Nav scroll state ---
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// --- Mobile menu ---
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.style.display = isOpen ? 'flex' : 'none';
    if (isOpen) mobileMenu.style.display = 'flex';
    navToggle.querySelectorAll('span').forEach((s, i) => {
      if (isOpen) {
        if (i === 0) { s.style.transform = 'rotate(45deg) translate(4px, 4px)'; }
        if (i === 1) { s.style.opacity = '0'; }
        if (i === 2) { s.style.transform = 'rotate(-45deg) translate(4px, -4px)'; }
      } else {
        s.style.transform = ''; s.style.opacity = '';
      }
    });
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.style.display = 'none';
      navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

// --- Scroll reveal ---
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => observer.observe(el));
}

// --- Active nav link ---
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  link.classList.toggle('active', href === currentPath || (currentPath === '' && href === 'index.html'));
});

