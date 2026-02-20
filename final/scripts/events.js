// events.js

export async function loadFeaturedEvents(limit = 15) {
  try {
    const response = await fetch('./data/events.json');
    if (!response.ok) throw new Error("Failed to load events data");

    const events = await response.json();
    const container = document.getElementById('featured-events');
    container.innerHTML = "";

    events
      .filter(event => event.category !== "Cancelled")
      .slice(0, limit)
      .forEach(event => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p><strong>Category:</strong> ${event.category}</p>
          <p>${event.description}</p>
          <button class="favorite-btn" data-id="${event.id}" data-type="event">⭐ Favorite</button>
        `;

        container.appendChild(card);
      });
  } catch (error) {
    console.error("Error loading events:", error);
  }
}