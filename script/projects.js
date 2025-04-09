const projects = [
  {
    title: "Dependency Analyzer",
    description: "Application pour visualiser les dépendances entre les composants.",
    url: "https://github.com/LBasil/analyze-dependencies",
    image: "images/dependency_analyzer.png",
    badges: ["JavaScript", "API"],
    archived: false
  },
  {
    title: "Pokemon Card Viewer",
    description: "Application pour visualiser des cartes Pokémon avec manipulation d'API.",
    url: "https://pokemon-card-viewer-ashy.vercel.app/",
    image: "images/pokemon.png",
    badges: ["JavaScript", "API"],
    archived: true
  },
  {
    title: "Reigns - Prototype",
    description: "Prototype reproduisant le jeu Reigns - Her Majesty.",
    url: "https://reigns-prototype.vercel.app/",
    image: "images/reigns.png",
    badges: ["Archivé"],
    archived: true
  },
  {
    title: "Shifumi",
    description: "Remasterisation moderne du jeu classique Pierre-Papier-Ciseaux.",
    url: "https://shifumi-nine.vercel.app/",
    image: "images/shifumi.png",
    badges: ["Archivé"],
    archived: true
  },
  {
    title: "Pile ou Face",
    description: "Version extrême du jeu classique de pile ou face.",
    url: "https://pile-face.vercel.app/",
    image: "images/pile-face.png",
    badges: ["Archivé"],
    archived: true
  },
  {
    title: "Plus ou Moins",
    description: "Jeu de déduction numérique avec une touche moderne.",
    url: "https://plus-moins.vercel.app/",
    image: "images/plus-moins.png",
    badges: ["Archivé"],
    archived: true
  },
  {
    title: "DeXtreme",
    description: "Jeu de dé avec des mécaniques innovantes.",
    url: "https://de-xtreme.vercel.app/",
    image: "images/dextreme.png",
    badges: ["Archivé"],
    archived: true
  },
  {
    title: "Memory Extrême",
    description: "Version moderne du jeu de mémoire avec différents modes.",
    url: "https://memory-rosy.vercel.app/",
    image: "images/memory.png",
    badges: ["Archivé"],
    archived: true
  }
];

// Fonction pour afficher les projets archivés et non archivés
function displayProjects() {
  const nonArchivedContainer = document.getElementById('non-archived-projects');
  const archivedContainer = document.getElementById('archives-content');

  // Effacer les contenus existants avant d'ajouter de nouveaux projets
  nonArchivedContainer.innerHTML = '';
  archivedContainer.innerHTML = '';

  // Ajouter les projets non archivés
  projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('col-lg-4', 'col-md-6');
      projectElement.innerHTML = `
          <div class="card shadow-sm">
              <img src="${project.image}" class="card-img-top" alt="${project.title}">
              <div class="card-body">
                  <h5 class="card-title">${project.title}</h5>
                  <p class="card-text">${project.description}</p>
                  <a href="${project.url}" class="btn btn-primary">Voir le projet</a>
              </div>
          </div>
      `;
      if (project.archived) {
          archivedContainer.appendChild(projectElement);
      } else {
          nonArchivedContainer.appendChild(projectElement);
      }
  });
}

// Initialiser l'affichage des projets au chargement de la page
document.addEventListener('DOMContentLoaded', displayProjects);

// Fonction de toggle des projets archivés
function toggleArchives() {
  const archivesContent = document.getElementById('archives-content');
  const toggleArchivesBtn = document.getElementById('toggle-archives');

  if (archivesContent.style.display === 'none' || !archivesContent.style.display) {
      archivesContent.style.display = 'flex';
      toggleArchivesBtn.innerHTML = '<i class="fas fa-chevron-up me-2"></i> Masquer les projets archivés';
  } else {
      archivesContent.style.display = 'none';
      toggleArchivesBtn.innerHTML = '<i class="fas fa-chevron-down me-2"></i> Voir les projets archivés';
  }
}

// Ajouter l'événement de toggle
document.getElementById('toggle-archives').addEventListener('click', toggleArchives);
