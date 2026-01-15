// Responsive navigation: hamburger toggles nav visibility without twitching on hover
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');

function setExpanded(expanded) {
  toggle.setAttribute('aria-expanded', String(expanded));
  nav.style.display = expanded ? 'block' : 'none';
}

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  setExpanded(!isOpen);
});

// Close menu when a link is clicked (small screens)
nav?.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof HTMLAnchorElement) {
    setExpanded(false);
  }
});

// Ensure correct initial state on load and on resize
function syncNavToViewport() {
  const wide = window.matchMedia('(min-width: 700px)').matches;
  if (wide) {
    nav.style.display = 'block';
    toggle.setAttribute('aria-expanded', 'false');
  } else {
    nav.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
  }
}

window.addEventListener('resize', syncNavToViewport);
window.addEventListener('DOMContentLoaded', syncNavToViewport);