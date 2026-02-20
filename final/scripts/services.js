// services.js

export async function loadFeaturedServices(limit = 15) {
  try {
    const response = await fetch('./data/services.json');
    if (!response.ok) throw new Error("Failed to load services data");

    const services = await response.json();
    const container = document.getElementById('featured-services');
    container.innerHTML = "";

    services
      .map(service => ({
        ...service,
        displayName: service.name.toUpperCase()
      }))
      .slice(0, limit)
      .forEach(service => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
          <h3>${service.displayName}</h3>
          <p><strong>Type:</strong> ${service.type}</p>
          <p><strong>Contact:</strong> ${service.contact}</p>
          <p>${service.description}</p>
          <button class="favorite-btn" data-id="${service.id}" data-type="service">⭐ Favorite</button>
        `;

        container.appendChild(card);
      });
  } catch (error) {
    console.error("Error loading services:", error);
  }
}