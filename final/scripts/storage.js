// storage.js

// Save favorite item
function saveFavorite(id, type) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push({ id, type });
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert("Saved to favorites!");
}

// Load favorites
function loadFavorites() {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const container = document.getElementById('favorites');
  if (!container) return;

  container.innerHTML = "";
  favorites.forEach(fav => {
    const item = document.createElement('p');
    item.textContent = `Favorite ${fav.type}: ${fav.id}`;
    container.appendChild(item);
  });
}

// Example usage: attach to buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const type = btn.dataset.type;
      saveFavorite(id, type);
    });
  });

  loadFavorites();
});