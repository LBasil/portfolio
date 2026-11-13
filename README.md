# Portfolio - Basil L'Hôte

<p align="center">
  <img src="https://img.shields.io/badge/Vue_3-42b883?logo=vuedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Pinia-ffd859?logo=pinia&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap_5-7952b3?logo=bootstrap&logoColor=white" />
</p>

<p align="center">
  Portfolio personnel - développeur front-end Vue 3 / TypeScript chez Ankama Games (Dofus Touch).<br>
  <a href="https://portfolio-delta-tawny-25.vercel.app/">Voir le site en ligne</a>
</p>

---

## Stack

| Outil | Rôle |
|---|---|
| **Vue 3** + `<script setup>` | Framework UI, Composition API |
| **TypeScript** | Typage strict sur l'ensemble du projet |
| **Vite 6** | Build tool & dev server |
| **Pinia** | State management (thème light/dark) |
| **vue-i18n** | Site bilingue FR/EN (français par défaut) |
| **Vue Router 4** | SPA + lazy loading des vues blog |
| **Bootstrap 5** | CSS utilities & composants |
| **@vueuse/core** | Composables utilitaires (Intersection Observer, etc.) |
| **ScrollReveal** | Animations d'entrée au scroll |
| **@fontsource** | Polices auto-hébergées, sous-ensemble latin (Inter, Fira Code, Press Start 2P) |
| **Font Awesome Free** | Sous-ensemble généré par `npm run icons` : seules les icônes utilisées sont embarquées |

---

## Lancer le projet

```bash
npm install
npm run dev          # dev server → http://localhost:5173
npm run build        # build production → dist/
npm run type-check   # vérification TypeScript sans build
npm run icons        # régénère le sous-ensemble Font Awesome (à relancer si une classe `fa-...` change)
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
│   ├── useLocale.ts          # Langue courante, bascule, formatage des dates
│   ├── useScrollReveal.ts    # Wrapper ScrollReveal
│   ├── useActiveSection.ts   # Détection section active au scroll
│   └── useCountUp.ts         # Animation compteur (IntersectionObserver)
├── data/
│   ├── projects.ts           # Liste des projets typée, textes en { fr, en }
│   ├── timeline.ts           # Entrées timeline Dofus Touch (dates AAAA-MM, textes { fr, en })
│   ├── background.ts         # Parcours et formation
│   └── pokeboosterCase.ts    # Contenu de l'étude de cas PokéBooster (FR/EN)
├── i18n/                      # fr.ts (référence), en.ts (mêmes clés, vérifié par vue-tsc), index.ts
├── router/index.ts            # Routes SPA + lazy loading
├── stores/themeStore.ts       # Pinia store thème (persisté en localStorage)
├── types/index.ts             # Interfaces TypeScript
└── views/
    ├── HomeView.vue
    └── projects/
        ├── PokeBoosterView.vue   # Étude de cas PokéBooster
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
| `/projects/pokebooster` | Étude de cas - PokéBooster (Vue 3, Supabase, tests) |
| `/projects/brawl-chess` | Dev blog - Brawl Chess (Love2D + Java) |
| `/projects/brawl-chess-v2` | Dev blog - Brawl Chess V2 (Vue 3, en cours) |
| `/projects/sporyx` | Dev blog - Sporyx (Godot + Java) |
| `/projects/dependency-analyzer` | Dev blog - Dependency Analyzer (JS) |

---

## Langues

Le site est en français par défaut (cible principale, et c'est ce que voient les robots d'indexation). L'anglais s'active avec le bouton `EN` de la navbar, ou avec `?lang=en` dans l'URL (lien partageable) ; le choix est mémorisé dans `localStorage`.
Les textes de l'interface sont dans `src/i18n/fr.ts` et `en.ts`. Les textes des fichiers de `src/data/` sont des paires `{ fr, en }`. Les dev blogs des projets de jeux restent en français (`lang="fr"` sur leur contenu).

---

## Décisions techniques

**Pourquoi Vue 3 + TypeScript ?**
Stack que j'utilise en dehors de mon travail au quotidien - projets perso en Vue 3, formation TypeScript. Le portfolio lui-même sert de vitrine de ces compétences.

**Pourquoi Pinia pour un simple toggle de thème ?**
Le thème doit être accessible depuis la navbar (HomeView) et depuis les navbar des vues blog. Un store centralisé évite le prop-drilling et le duplicat de logique.

**Pourquoi un sous-ensemble de Font Awesome ?**
Le pack complet pèse des centaines de Ko pour une trentaine d'icônes. `scripts/subset-icons.mjs` lit les classes `fa-...` du code et génère deux polices (~4 Ko au total) et leur CSS.

**Pourquoi pas de CSS-in-JS ou Tailwind ?**
Bootstrap est suffisant pour ce périmètre. L'objectif était de produire quelque chose de propre et lisible, pas de rajouter une couche de complexité.

---

## Déploiement

Déployé sur Vercel ; `vercel.json` réécrit toutes les routes vers `index.html` pour que les URL `/projects/...` fonctionnent en accès direct. La CI GitHub Actions (`.github/workflows/ci.yml`) lance `type-check`, `build` et `npm audit` à chaque push.

`npm run build` suffit — le plugin Vite `copyStaticAssets` copie automatiquement `images/` et `videos/` dans `dist/` à chaque build. Prévu pour Vercel ; sur un autre hébergeur statique, prévoir la même réécriture vers `index.html`.

---

*Basil L'Hôte - [LinkedIn](https://www.linkedin.com/in/basil-l-h%C3%B4te-a653b8213/) · [GitHub](https://github.com/LBasil)*
