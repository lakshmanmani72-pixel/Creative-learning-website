document.addEventListener('DOMContentLoaded', () => {
  /* --- 1. Theme Toggle (Dark Mode) --- */
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.documentElement;
  
  // Check local storage for theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
  } else {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.setAttribute('data-theme', 'dark');
      updateToggleIcon('dark');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateToggleIcon(newTheme);
    });
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark') {
      themeToggle.innerHTML = '☀️'; // Show sun when in dark mode
    } else {
      themeToggle.innerHTML = '🌙'; // Show moon when in light mode
    }
  }

  /* --- 2. Mobile Navigation Toggle --- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.innerHTML = navLinks.classList.contains('show') ? '✖' : '☰';
    });
  }

  /* --- 3. Scroll Header Effect --- */
  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  /* --- 4. Scroll Reveal Animations --- */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
