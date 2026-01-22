// Load JSON data
async function loadMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displayMembers(data.members);
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
      <a href="${member.website}" target="_blank">Visit Website</a>
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

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Footer info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Run
loadMembers();