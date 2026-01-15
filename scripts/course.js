// Course List Array (adapted to assignment). Mark completed=true for your progress.
const courses = [
  // WDD courses
  { code: 'WDD130', title: 'Web Fundamentals', credits: 2, type: 'wdd', completed: true },
  { code: 'WDD131', title: 'Dynamic Web Fundamentals', credits: 2, type: 'wdd', completed: true },
  { code: 'WDD231', title: 'Frontend Web Development I', credits: 3, type: 'wdd', completed: false },

  // CSE courses
  { code: 'CSE110', title: 'Introduction to Programming', credits: 2, type: 'cse', completed: true },
  { code: 'CSE111', title: 'Programming with Functions', credits: 3, type: 'cse', completed: false },
  { code: 'CSE210', title: 'Programming with Classes', credits: 3, type: 'cse', completed: false },
];

// DOM refs
const grid = document.getElementById('course-grid');
const creditTotalEl = document.getElementById('credit-total');
const filterButtons = document.querySelectorAll('.filter-btn');

// Render helpers
function courseCard(course) {
  const card = document.createElement('article');
  card.className = 'course-card';
  card.setAttribute('data-type', course.type);

  const title = document.createElement('h3');
  title.textContent = `${course.code} — ${course.title}`;

  const meta = document.createElement('p');
  meta.className = 'course-meta';
  meta.textContent = `${course.type.toUpperCase()} • ${course.credits} credits`;

  const badge = document.createElement('span');
  badge.className = 'badge' + (course.completed ? ' completed' : '');
  badge.textContent = course.completed ? 'Completed' : 'In progress';

  card.appendChild(title);
  card.appendChild(meta);
  card.appendChild(badge);

  return card;
}

function renderCourses(list) {
  grid.innerHTML = '';
  list.forEach(c => grid.appendChild(courseCard(c)));
  const total = list.reduce((sum, c) => sum + (c.credits || 0), 0);
  creditTotalEl.textContent = String(total);
}

function applyFilter(kind) {
  switch (kind) {
    case 'wdd':
      renderCourses(courses.filter(c => c.type === 'wdd'));
      break;
    case 'cse':
      renderCourses(courses.filter(c => c.type === 'cse'));
      break;
    default:
      renderCourses(courses.slice());
  }
}

// Wire up filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const kind = btn.getAttribute('data-filter');
    applyFilter(kind);
  });
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  applyFilter('all');
});