// spotlight.js
async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Members data not available");
    const members = await response.json();

    // Filter gold & silver members
    const spotlightMembers = members.filter(m =>
        ["Gold", "Silver", "Bronze"].includes(m.membership)
    );

    // Randomly select 2–3 members
    const selected = [];
    while (selected.length < 3 && spotlightMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
      selected.push(spotlightMembers.splice(randomIndex, 1)[0]);
    }

    // Display in container
    const container = document.getElementById("spotlight-container");
    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo" />
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>${member.membership} Member</strong></p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    document.getElementById("spotlight-container").textContent = "Unable to load spotlights.";
  }
}

loadSpotlights();