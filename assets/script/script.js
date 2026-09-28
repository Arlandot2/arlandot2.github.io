const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
const themeButton = document.querySelector('.theme-button');
const year = document.getElementById('year');
const scrollTopButton = document.querySelector('.scroll-top');
const navLinks = navigation ? Array.from(navigation.querySelectorAll('a[href^="#"]')) : [];

function closeMenu() {
  if (!menuButton || !navigation) return;

  navigation.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Ouvrir le menu');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (themeButton) {
    themeButton.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'
    );
  }
}

let savedTheme;

try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch (_) {
  savedTheme = null;
}

applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);

    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch (_) {
      // Le thème reste appliqué même si le stockage local est indisponible.
    }
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

  if (scrollTopButton) {
    scrollTopButton.style.setProperty('--scroll-progress', `${Math.min(progress, 100)}%`);
    scrollTopButton.classList.toggle('is-visible', window.scrollY > 320);
  }
}

function updateActiveNavigation() {
  if (!navLinks.length) return;

  let activeId = navLinks[0].getAttribute('href');

  navLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    const rect = target.getBoundingClientRect();
    if (rect.top <= 140) {
      activeId = link.getAttribute('href');
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === activeId;
    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function handleScrollState() {
  updateScrollProgress();
  updateActiveNavigation();
}

window.addEventListener('scroll', handleScrollState, { passive: true });
window.addEventListener('resize', handleScrollState);
handleScrollState();
