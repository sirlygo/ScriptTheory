const navToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
const links = document.querySelectorAll('nav a');
links.forEach((link) => {
  const href = link.getAttribute('href');
  if (!href) return;
  const linkUrl = new URL(href, window.location.origin + window.location.pathname.replace(/[^\/]*$/, ''));
  const linkPath = linkUrl.pathname.replace(/\/index\.html$/, '/');
  if (currentPath === linkPath) {
    link.classList.add('active');
  }
});
