// main.js
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

import { loadFeaturedEvents } from './events.js';
import { loadFeaturedServices } from './services.js';

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('home-page')) {
    loadFeaturedEvents(3);
    loadFeaturedServices(3);
  }

  if (document.body.classList.contains('events-page')) {
    loadFeaturedEvents(15);
  }

  if (document.body.classList.contains('services-page')) {
    loadFeaturedServices(15);
  }
});