import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'PokéBooster',
    description: {
      fr: 'Application Vue 3 de collection de cartes Pokémon : boosters de tous les sets avec les vrais taux de drop, classeur, échanges entre joueurs, PWA. Supabase (auth, Postgres, temps réel), FR/EN, tests Vitest et Playwright, CI GitHub Actions.',
      en: 'Vue 3 Pokémon card collecting app: boosters from every set with real pull rates, a binder, player-to-player trades, PWA. Supabase (auth, Postgres, realtime), FR/EN, Vitest and Playwright tests, GitHub Actions CI.'
    },
    url: 'https://pokemon-booster-game.vercel.app/',
    repoUrl: 'https://github.com/LBasil/pokemon-booster-game',
    image: '/images/pokebooster.webp',
    badges: ['VueJS', 'Supabase', 'Game', 'Finished'],
    archived: false,
    hasBlog: true,
    blogUrl: '/projects/pokebooster',
    blogLabel: { fr: 'Étude de cas', en: 'Case study' }
  },
  {
    title: 'Dependency Analyzer',
    description: {
      fr: 'Outil de visualisation des dépendances entre composants.',
      en: 'Tool to visualise dependencies between components.'
    },
    url: 'https://github.com/LBasil/analyze-dependencies',
    image: '/images/dependency_analyzer.webp',
    badges: ['JavaScript', 'API', 'Finished'],
    archived: false,
    hasBlog: true,
    blogUrl: '/projects/dependency-analyzer'
  },
  {
    title: 'DejaVue',
    description: {
      fr: 'Documentation Vue minimaliste, pensée comme une cheat sheet.',
      en: 'Minimalist Vue documentation, designed as a cheat sheet.'
    },
    url: 'https://deja-vue.vercel.app/',
    repoUrl: 'https://github.com/LBasil/DejaVue',
    image: '/images/dejavue.webp',
    badges: ['TypeScript', 'VueJS', 'In-Progress'],
    archived: false,
    hasBlog: false,
    blogUrl: ''
  },
  {
    title: 'Chroma',
    description: {
      fr: 'Convertisseur de couleurs sans dépendance : plus de 100 formats (web, vidéo, impression, gamuts larges), pipette, nuancier. JavaScript vanilla, sans build, hors ligne.',
      en: 'Zero-dependency color converter: 100+ formats (web, video, print, wide gamut), eyedropper, shade scale. Vanilla JavaScript, no build step, works offline.'
    },
    url: 'https://lbasil.github.io/Chroma/',
    repoUrl: 'https://github.com/LBasil/Chroma',
    image: '/images/chroma.webp',
    badges: ['JavaScript', 'Finished'],
    archived: false,
    hasBlog: false,
    blogUrl: ''
  },
  {
    title: 'Brawl chess V2',
    description: {
      fr: "Jeu de combat d'échecs 1v1 mobile comme vous n'en avez jamais vu.",
      en: 'A 1v1 mobile chess-fighting game like you have never seen.'
    },
    url: '',
    image: '',
    badges: ['VueJS', 'Game', 'In-Progress'],
    archived: true,
    hasBlog: true,
    blogUrl: '/projects/brawl-chess-v2'
  },
  {
    title: 'Digivolution Network',
    description: {
      fr: 'Suivi simplifié de vos Digimon dans Digimon World Next Order.',
      en: 'Simple tracking of your Digimon in Digimon World Next Order.'
    },
    url: 'https://digivolution-newtork.vercel.app/',
    repoUrl: 'https://github.com/LBasil/Digivolution-Newtork',
    image: '/images/digivolution-network.webp',
    badges: ['JavaScript', 'In-Progress'],
    hasBlog: false,
    archived: false
  },
  {
    title: 'Brawl chess',
    description: {
      fr: "Le prototype original du jeu de combat d'échecs 1v1 mobile.",
      en: 'The original prototype of the 1v1 mobile chess-fighting game.'
    },
    url: 'https://github.com/LBasil/Brawl-Chess',
    image: '/images/brawl_chess.webp',
    badges: ['Love2D', 'Game', 'Prototype finished'],
    archived: true,
    hasBlog: true,
    blogUrl: '/projects/brawl-chess'
  },
  {
    title: 'Sporyx',
    description: {
      fr: 'Jeu idle mobile. Survivez dans un monde fongique où les mutations sont partout.',
      en: 'Mobile idle game. Survive in a fungal world where mutations are everywhere.'
    },
    url: 'https://github.com/LBasil/sporyx',
    image: '/images/godot.webp',
    badges: ['Godot', 'Game'],
    archived: true,
    hasBlog: true,
    blogUrl: '/projects/sporyx'
  },
  {
    title: 'BaseX',
    description: {
      fr: 'Jeu de survie et construction de base sur mobile, avec Godot.',
      en: 'Base-building survival game on mobile, built with Godot.'
    },
    url: 'https://github.com/LBasil/baseX',
    badges: ['Godot', 'Game', 'Paused'],
    archived: true
  },
  {
    title: 'Pokemon Card Viewer',
    description: {
      fr: 'Application de visualisation de cartes Pokémon via une API externe.',
      en: 'App to browse Pokémon cards through an external API.'
    },
    url: 'https://pokemon-card-viewer-ashy.vercel.app/',
    repoUrl: 'https://github.com/LBasil/pokemon-card-viewer',
    image: '/images/pokemon.webp',
    badges: ['JavaScript', 'API', 'Finished'],
    archived: true
  },
  {
    title: 'Reigns - Prototype',
    description: {
      fr: 'Prototype inspiré du jeu Reigns : Her Majesty.',
      en: 'Prototype inspired by the game Reigns: Her Majesty.'
    },
    url: 'https://reigns-prototype.vercel.app/',
    repoUrl: 'https://github.com/LBasil/reigns-prototype',
    image: '/images/reigns.webp',
    badges: ['JavaScript', 'Game', 'Finished'],
    archived: true
  },
  {
    title: 'Shifumi',
    description: {
      fr: 'Version moderne du classique Pierre-Papier-Ciseaux.',
      en: 'A modern take on the classic Rock-Paper-Scissors.'
    },
    url: 'https://shifumi-nine.vercel.app/',
    repoUrl: 'https://github.com/LBasil/shifumi',
    image: '/images/shifumi.png',
    badges: ['JavaScript', 'Game', 'Finished'],
    archived: true
  },
  {
    title: 'Heads or Tails',
    description: {
      fr: 'Version extrême du classique pile ou face.',
      en: 'An extreme take on the classic coin flip.'
    },
    url: 'https://pile-face.vercel.app/',
    repoUrl: 'https://github.com/LBasil/pile-face',
    image: '/images/pile-face.png',
    badges: ['JavaScript', 'Game', 'Finished'],
    archived: true
  },
  {
    title: 'Higher or Lower',
    description: {
      fr: 'Jeu de devinettes de nombres avec une touche moderne.',
      en: 'Number-guessing game with a modern twist.'
    },
    url: 'https://plus-moins.vercel.app/',
    repoUrl: 'https://github.com/LBasil/plus-moins',
    image: '/images/plus-moins.webp',
    badges: ['JavaScript', 'Game', 'Finished'],
    archived: true
  },
  {
    title: 'DeXtreme',
    description: {
      fr: 'Jeu de dés aux mécaniques innovantes.',
      en: 'Dice game with innovative mechanics.'
    },
    url: 'https://de-xtreme.vercel.app/',
    repoUrl: 'https://github.com/LBasil/deXtreme',
    image: '/images/dextreme.webp',
    badges: ['JavaScript', 'Game', 'Finished'],
    archived: true
  },
  {
    title: 'Extreme Memory',
    description: {
      fr: 'Jeu de mémoire moderne avec plusieurs modes de jeu.',
      en: 'Modern memory game with several game modes.'
    },
    url: 'https://memory-rosy.vercel.app/',
    repoUrl: 'https://github.com/LBasil/memory',
    image: '/images/memory.webp',
    badges: ['JavaScript', 'Game', 'Finished'],
    archived: true
  }
]
