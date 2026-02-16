// events.js

export async function loadFeaturedEvents() {
  try {
    const response = await fetch('./data/events.json');
    if (!response.ok) throw new Error('Failed to fetch events data');

    const data = await response.json();
    const eventsContainer = document.getElementById('featured-events');

    // Display first 3 events as "featured"
    data.events.slice(0, 3).forEach(event => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Category:</strong> ${event.category}</p>
        <p><strong>Location:</strong> ${event.location}</p>
      `;
      eventsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading events:', error);
  }
}