// services.js

export async function loadFeaturedServices() {
  try {
    const response = await fetch('data/services.json');
    if (!response.ok) throw new Error('Failed to fetch services data');

    const data = await response.json();
    const servicesContainer = document.getElementById('featured-services');

    // Display first 3 services as "featured"
    data.services.slice(0, 3).forEach(service => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${service.name}</h3>
        <p><strong>Type:</strong> ${service.type}</p>
        <p><strong>Contact:</strong> ${service.contact}</p>
        <p>${service.description}</p>
      `;
      servicesContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading services:', error);
  }
}