// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight active navigation link
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Scroll-triggered animations
const revealOnScroll = () => {
  document.querySelectorAll('.events, .spotlights').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

  // Smooth scroll for internal links
  const smoothLinks = document.querySelectorAll("a[href^='#']");
  smoothLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Example: Toggle dark mode
  const footer = document.querySelector("footer");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Dark Mode";
  toggleBtn.classList.add("btn-toggle");
  footer.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});