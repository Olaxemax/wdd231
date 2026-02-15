// Load JSON data
async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  const container = document.getElementById('members');
  container.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      <p><strong>Membership:</strong> ${member.membership}</p>
    `;

    container.appendChild(card);
  });
}

// Toggle views
document.getElementById('gridBtn').addEventListener('click', () => {
  document.getElementById('members').classList.remove('list-view');
  document.getElementById('members').classList.add('grid-view');
});

document.getElementById('listBtn').addEventListener('click', () => {
  document.getElementById('members').classList.remove('grid-view');
  document.getElementById('members').classList.add('list-view');
});

// Hamburger menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Footer info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Run
loadMembers();