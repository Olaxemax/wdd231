
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

import { loadFeaturedEvents } from './events.js';
import { loadFeaturedServices } from './services.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('featured-events')) {
    loadFeaturedEvents();
  }
  if (document.getElementById('featured-services')) {
    loadFeaturedServices();
  }
});