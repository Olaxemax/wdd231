const toggleBtn = document.getElementById("darkModeToggle");

// Detect system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply initial theme
if (prefersDark) {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode manually
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}