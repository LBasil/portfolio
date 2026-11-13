// Messages français : la référence. `en.ts` doit avoir exactement les mêmes clés (vérifié par vue-tsc).
// Les messages avec <strong> sont affichés via v-html : ce sont des constantes du dépôt, jamais du contenu utilisateur.
export const fr = {
  meta: {
    title: "Basil L'Hôte - Développeur front-end JavaScript, Vue 3 & TypeScript",
    description:
      "Portfolio de Basil L'Hôte, développeur front-end chez Ankama Games (Dofus Touch). JavaScript, Vue 3, TypeScript, interfaces web performantes."
  },
  nav: {
    brand: "Basil L'Hôte",
    main: 'Navigation principale',
    home: 'Accueil',
    toggle: 'Afficher la navigation',
    about: 'À propos',
    experience: 'Expérience',
    portfolio: 'Portfolio',
    skills: 'Compétences',
    contact: 'Contact',
    themeLight: 'Passer en mode clair',
    themeDark: 'Passer en mode sombre',
    langCode: 'EN',
    langLabel: 'Passer le site en anglais'
  },
  hero: {
    label: 'Développeur front-end Vue 3 · TypeScript · Ankama Games',
    lead: 'Je conçois les interfaces de Dofus Touch chez Ankama depuis septembre 2023. En parallèle, je construis mes propres produits full stack en Vue 3.',
    projects: 'Voir mes projets',
    contact: 'Me contacter',
    cv: 'Télécharger mon CV',
    scroll: 'Défiler vers la section À propos'
  },
  about: {
    title: 'À propos',
    avatarAlt: "Basil L'Hôte, développeur front-end",
    p1: "Développeur front-end JavaScript chez <strong>Ankama Games</strong>, je travaille depuis septembre 2023 sur <strong>Dofus Touch</strong> - un MMORPG mobile à plusieurs millions de joueurs.",
    p2: "Mon quotidien : concevoir et intégrer des <strong>interfaces de jeu complexes</strong>, piloter des features de bout en bout, maintenir la qualité sur une base de code existante et coordonner les livraisons. J'ai notamment piloté le développement complet du <strong>Dédale</strong>, l'une des plus grosses mises à jour du jeu.",
    p3: 'En dehors du travail, je construis mes projets en <strong>Vue 3 + TypeScript</strong>, dont <strong>PokéBooster</strong> : authentification, base PostgreSQL et temps réel (Supabase), tests unitaires et e2e. Ouvert aux nouvelles opportunités, avec Vue.js au centre et une évolution vers le full stack.',
    statContributions: 'contributions',
    statContributionsSub: 'Dofus Touch',
    statYears: 'ans chez Ankama',
    statYearsSub: 'Sept. 2023 → {year}',
    statProjects: 'projets perso',
    statProjectsSub: 'jeux, outils, expérimentations',
    statAria: '{value}{suffix} {label} — {sub}',
    pathTitle: 'Parcours et formation'
  },
  experience: {
    title: 'Chez Ankama',
    subtitle: '<strong>Ankama Games</strong> · Développeur front-end · Dofus Touch',
    period: "Septembre 2023 → aujourd'hui",
    count: '{n} contributions',
    filterAll: 'Tout',
    filterMaj: 'MAJ',
    filterDevblog: 'Devblogs',
    filterLive: 'Lives',
    prev: 'Précédent',
    next: 'Suivant',
    listAria: 'Contributions Dofus Touch'
  },
  timeline: {
    typeMaj: 'MÀJ',
    typeDevblog: 'Devblog',
    typeLive: 'Live',
    read: "Voir l'article",
    readAria: "Voir l'article : {title} (nouvelle fenêtre)"
  },
  projects: {
    title: 'Projets en vedette',
    intro:
      'Jeux, outils et interfaces - principalement en <strong>Vue 3</strong> et <strong>JavaScript</strong>. Chaque projet avec son dev blog quand il y en a un (rédigés en français).',
    archivesTitle: 'Expérimentations',
    archivesIntro: "Prototypes et petits jeux - utiles pour voir l'évolution.",
    show: 'Voir les {n} projets archivés',
    hide: 'Masquer'
  },
  card: {
    view: 'Voir le projet',
    viewAria: 'Voir le projet {title} (nouvelle fenêtre)',
    code: 'GitHub',
    codeAria: 'Voir le code source de {title} sur GitHub (nouvelle fenêtre)',
    blog: 'Dev blog',
    blogAria: 'Voir : {label} — {title}',
    placeholder: 'En développement',
    placeholderAria: 'Image non disponible pour {title}'
  },
  badge: {
    game: 'Jeu',
    inProgress: 'En cours',
    finished: 'Terminé',
    prototypeFinished: 'Prototype terminé',
    paused: 'En pause'
  },
  skills: {
    title: 'Compétences',
    languages: 'Langages & Frameworks',
    tooling: 'Outillage & qualité',
    backend: 'Backend & données'
  },
  contact: {
    title: 'Contact',
    lead: 'Développeur front-end en poste chez <strong>Ankama Games</strong>, ouvert aux nouvelles opportunités.',
    belgium: 'Belgique',
    lille: 'Métropole Lilloise',
    remote: 'Remote',
    cv: 'Mon CV (PDF)',
    copy: "Copier l'adresse email",
    copied: 'Copié !',
    copiedAria: 'Email copié dans le presse-papier',
    copiedStatus: 'Adresse email copiée dans le presse-papier.'
  },
  footer: {
    madeWith: 'Fait avec',
    cgu: 'CGU',
    universe: 'X-Universe',
    universeAria: 'X-Universe — archives de conception'
  },
  case: {
    back: 'Retour au portfolio',
    demo: 'Voir la démo',
    code: 'Voir le code',
    role: 'Rôle',
    period: 'Période',
    status: 'Statut',
    stack: 'Stack',
    problem: 'Problème',
    fix: 'Solution',
    caseStudy: 'Étude de cas',
    why: 'Pourquoi',
    tradeoff: 'Compromis',
    docs: 'Documentation technique du dépôt (en français)'
  }
}

export type Messages = typeof fr
