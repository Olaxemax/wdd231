// Footer: dynamic current year and last modified
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentyear');
  const lastEl = document.getElementById('lastModified');

  const now = new Date();
  yearEl.textContent = String(now.getFullYear());

  // document.lastModified returns a simple string per assignment
  lastEl.textContent = `Last modified: ${document.lastModified}`;
});