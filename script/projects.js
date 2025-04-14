// ===========================
// Project List
// ===========================
const projects = [
  {
    title: "Dependency Analyzer",
    description: "Tool to visualize dependencies between components.",
    url: "https://github.com/LBasil/analyze-dependencies",
    image: "images/dependency_analyzer.png",
    badges: ["JavaScript", "API"],
    archived: false
  },
  {
    title: "BaseX",
    description: "Mobile game",
    url: "https://github.com/LBasil/baseX",
    image: "images/baseX.png",
    badges: ["Godot", "Game"],
    archived: false,
    hasBlog: true,
    blogUrl: "projects/base-x.html"
  },
  {
    title: "Pokemon Card Viewer",
    description: "App to view Pokémon cards using an external API.",
    url: "https://pokemon-card-viewer-ashy.vercel.app/",
    image: "images/pokemon.png",
    badges: ["JavaScript", "API"],
    archived: true
  },
  {
    title: "Reigns - Prototype",
    description: "A prototype inspired by the game Reigns - Her Majesty.",
    url: "https://reigns-prototype.vercel.app/",
    image: "images/reigns.png",
    badges: ["Archived"],
    archived: true
  },
  {
    title: "Shifumi",
    description: "Modern take on the classic Rock-Paper-Scissors game.",
    url: "https://shifumi-nine.vercel.app/",
    image: "images/shifumi.png",
    badges: ["Archived"],
    archived: true
  },
  {
    title: "Heads or Tails",
    description: "An extreme version of the classic heads-or-tails game.",
    url: "https://pile-face.vercel.app/",
    image: "images/pile-face.png",
    badges: ["Archived"],
    archived: true
  },
  {
    title: "Higher or Lower",
    description: "A number guessing game with a modern touch.",
    url: "https://plus-moins.vercel.app/",
    image: "images/plus-moins.png",
    badges: ["Archived"],
    archived: true
  },
  {
    title: "DeXtreme",
    description: "A dice game with innovative mechanics.",
    url: "https://de-xtreme.vercel.app/",
    image: "images/dextreme.png",
    badges: ["Archived"],
    archived: true
  },
  {
    title: "Extreme Memory",
    description: "Modern memory game with multiple modes.",
    url: "https://memory-rosy.vercel.app/",
    image: "images/memory.png",
    badges: ["Archived"],
    archived: true
  }
];

// ===========================
// Render Projects
// ===========================
function displayProjects() {
  const nonArchivedContainer = document.getElementById('non-archived-projects');
  const archivedContainer = document.getElementById('archives-content');

  // Clear existing content
  nonArchivedContainer.innerHTML = '';
  archivedContainer.innerHTML = '';

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('col-lg-4', 'col-md-6');

    projectElement.innerHTML = `
      <div class="card shadow-sm">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn btn-primary me-2" target="_blank" rel="noopener">Voir le projet</a>
          ${project.hasBlog ? `<a href="${project.blogUrl}" class="btn btn-outline-secondary">Voir le blog</a>` : ''}
        </div>
      </div>
    `;

    (project.archived ? archivedContainer : nonArchivedContainer).appendChild(projectElement);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  displayProjects();
  // ===========================
  // Archives Toggle Section
  // ===========================
  const toggleArchivesBtn = document.getElementById('toggle-archives');
  const archivesContent = document.getElementById('archives-content');
  const archivesSection = document.getElementById('archives');
  const archivedProjects = document.querySelectorAll('.archived');

  // Init transitions
  archivedProjects.forEach(project => {
    project.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    project.style.opacity = '0';
    project.style.transform = 'translateY(20px)';
  });

  // Toggle logic
  toggleArchivesBtn.addEventListener('click', () => {
    const isHidden = archivesContent.style.display === 'none' || !archivesContent.style.display;

    if (isHidden) {
      archivesContent.style.display = 'flex';
      archivesSection.classList.add('show-content');
      toggleArchivesBtn.innerHTML = '<i class="fas fa-chevron-up me-2"></i> Masquer les projets archivés';

      setTimeout(() => {
        archivedProjects.forEach((project, index) => {
          setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }, 10);
    } else {
      archivesContent.style.display = 'none';
      archivesSection.classList.remove('show-content');
      toggleArchivesBtn.innerHTML = '<i class="fas fa-chevron-down me-2"></i> Voir les projets archivés';
    }
  });
});