// Navbar scroll + active link + dark mode + scroll to top + mobile nav toggle
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');

// Navbar scroll + active section highlight
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  const fromTop = window.scrollY + navbar.offsetHeight + 10;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.parentElement.classList.add('active');
      } else {
        link.parentElement.classList.remove('active');
      }
    }
  });

  // Scroll-to-top button toggle
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to top action
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Mobile nav toggle (if you add hamburger later)
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
