# Portfolio — Basil L'Hôte

<p align="center">
  <img src="https://img.shields.io/badge/Vue_3-42b883?logo=vuedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Pinia-ffd859?logo=pinia&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap_5-7952b3?logo=bootstrap&logoColor=white" />
</p>

<p align="center">
  Portfolio personnel — développeur front-end JavaScript chez Ankama Games (Dofus Touch).
</p>

---

## Stack

| Outil | Rôle |
|---|---|
| **Vue 3** + `<script setup>` | Framework UI, Composition API |
| **TypeScript** | Typage strict sur l'ensemble du projet |
| **Vite 6** | Build tool & dev server |
| **Pinia** | State management (thème light/dark) |
| **Vue Router 4** | SPA + lazy loading des vues blog |
| **Bootstrap 5** | CSS utilities & composants |
| **@vueuse/core** | Composables utilitaires (Intersection Observer, etc.) |
| **ScrollReveal** | Animations d'entrée au scroll |

---

## Lancer le projet

```bash
npm install
npm run dev          # dev server → http://localhost:5173
npm run build        # build production → dist/
npm run build:prod   # build + copie images/ et videos/ dans dist/
npm run type-check   # vérification TypeScript sans build
```

---

## Structure

```
src/
├── assets/styles/     # CSS global (variables, header, navbar, timeline, blog…)
├── components/        # Composants UI réutilisables
│   ├── AppNavbar.vue  # Navbar principale avec détection section active
│   ├── BlogNavbar.vue # Navbar pour les pages blog
│   ├── AppHeader.vue  # Hero section
│   ├── AppFooter.vue
│   ├── AboutSection.vue      # Bio + stats animées (VueUse)
│   ├── ExperienceSection.vue # Timeline Dofus Touch filtrable
│   ├── PortfolioSection.vue  # Grille projets + archives
│   ├── SkillsSection.vue     # Tech stack en pills
│   ├── ContactSection.vue    # Liens + localisation
│   ├── ProjectCard.vue       # Carte projet avec badges sémantiques
│   ├── TimelineItem.vue      # Item de la timeline horizontale
│   └── BlogArticle.vue       # Article de blog accordéon
├── composables/
│   ├── useScrollReveal.ts    # Wrapper ScrollReveal
│   ├── useActiveSection.ts   # Détection section active au scroll
│   └── useCountUp.ts         # Animation compteur (IntersectionObserver)
├── data/
│   ├── projects.ts           # Liste des projets typée
│   └── timeline.ts           # Entrées timeline Dofus Touch
├── router/index.ts            # Routes SPA + lazy loading
├── stores/themeStore.ts       # Pinia store thème (persisté en localStorage)
├── types/index.ts             # Interfaces TypeScript
└── views/
    ├── HomeView.vue
    └── projects/
        ├── BrawlChessView.vue
        ├── BrawlChessV2View.vue
        ├── DependencyAnalyzerView.vue
        └── SporyxView.vue
```

---

## Pages

| Route | Contenu |
|---|---|
| `/` | Portfolio principal (SPA) |
| `/projects/brawl-chess` | Dev blog — Brawl Chess (Love2D + Java) |
| `/projects/brawl-chess-v2` | Dev blog — Brawl Chess V2 (Vue 3, en cours) |
| `/projects/sporyx` | Dev blog — Sporyx (Godot + Java) |
| `/projects/dependency-analyzer` | Dev blog — Dependency Analyzer (JS) |

---

## Décisions techniques

**Pourquoi Vue 3 + TypeScript ?**
Stack que j'utilise en dehors de mon travail au quotidien — projets perso en Vue 3, formation TypeScript. Le portfolio lui-même sert de vitrine de ces compétences.

**Pourquoi Pinia pour un simple toggle de thème ?**
Le thème doit être accessible depuis la navbar (HomeView) et depuis les navbar des vues blog. Un store centralisé évite le prop-drilling et le duplicat de logique.

**Pourquoi pas de CSS-in-JS ou Tailwind ?**
Bootstrap est suffisant pour ce périmètre. L'objectif était de produire quelque chose de propre et lisible, pas de rajouter une couche de complexité.

---

## Déploiement

Le build génère un dossier `dist/`. Les images (`images/`) et vidéos (`videos/`) du projet root sont référencées comme assets statiques et doivent être copiées à côté de `dist/` au déploiement, ou incluses via `npm run build:prod`.

---

*Basil L'Hôte — [LinkedIn](https://www.linkedin.com/in/basil-l-h%C3%B4te-a653b8213/) · [GitHub](https://github.com/LBasil)*
