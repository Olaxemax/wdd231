import { attractions } from "../data/discover.mjs"; 

const container = document.getElementById("attractions");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Build cards
attractions.forEach((item, index) => {
  const card = document.createElement("article");
  card.classList.add("attraction");
  card.style.gridArea = String.fromCharCode(97 + index); // a–h
  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}" />
      <figcaption>${item.name}</figcaption>
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button data-index="${index}">Learn More</button>
  `;
  container.appendChild(card);
});

// Modal logic
container.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const idx = e.target.dataset.index;
    const item = attractions[idx];
    document.getElementById("modalTitle").textContent = item.name;
    document.getElementById("modalImage").src = item.image;
    document.getElementById("modalImage").alt = item.name;
    document.getElementById("modalDescription").textContent = item.description;
    document.getElementById("modalAddress").textContent = item.address;
    document.getElementById("modalLink").href = item.url;
    modal.style.display = "block";
  }
});

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

// Visitor message
const message = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);