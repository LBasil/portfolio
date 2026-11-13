import type { LocalizedText as L } from '@/i18n'

// Étude de cas PokéBooster. Chaque affirmation vient de la documentation et des tests du dépôt
// LBasil/pokemon-booster-game (docs/technique, CLAUDE.md, supabase/, e2e/, .github/workflows).
// Les textes sont des constantes affichées via v-html : <code> est le seul balisage utilisé.

export type CaseBlock =
  | { type: 'p'; text: L }
  | { type: 'list'; items: L[] }
  | { type: 'choices'; items: { title: L; why: L; tradeoff: L }[] }
  | { type: 'stories'; items: { title: L; problem: L; fix: L }[] }
  | { type: 'flow'; columns: { title: L; items: L[] }[] }

export interface CaseSection {
  id: string
  title: L
  blocks: CaseBlock[]
}

export const pokeboosterCase = {
  demoUrl: 'https://pokemon-booster-game.vercel.app/',
  repoUrl: 'https://github.com/LBasil/pokemon-booster-game',
  docsUrl: 'https://github.com/LBasil/pokemon-booster-game/tree/HEAD/docs/technique',
  tagline: {
    fr: 'Application Vue 3 de collection de cartes Pokémon adossée à Supabase : authentification, base Postgres, temps réel, PWA, et une logique de jeu fiable côté serveur.',
    en: 'Vue 3 Pokémon card collecting app backed by Supabase: authentication, Postgres database, realtime, PWA, and trustworthy server-side game logic.'
  } as L,
  meta: {
    role: {
      fr: 'Projet personnel : conception, développement, tests, déploiement',
      en: 'Personal project: design, development, testing, deployment'
    } as L,
    period: {
      fr: 'Prototype en septembre 2024, refonte en Vue 3 en septembre 2026',
      en: 'Prototype in September 2024, rebuilt in Vue 3 in September 2026'
    } as L,
    status: { fr: 'En ligne (démo publique)', en: 'Live (public demo)' } as L,
    stack: [
      'Vue 3',
      'Vite',
      'Pinia',
      'Vue Router',
      'vue-i18n',
      'Supabase',
      'PostgreSQL',
      'Vitest',
      'Playwright',
      'GitHub Actions',
      'Vercel'
    ]
  },
  facts: [
    { value: { fr: '20 670', en: '20,670' } as L, label: { fr: 'cartes, dans 176 sets', en: 'cards, across 176 sets' } as L },
    { value: { fr: '~1 210', en: '~1,210' } as L, label: { fr: 'succès par mode de jeu', en: 'achievements per game mode' } as L },
    { value: { fr: '37', en: '37' } as L, label: { fr: 'migrations SQL', en: 'SQL migrations' } as L },
    { value: { fr: '16', en: '16' } as L, label: { fr: 'fichiers de tests e2e', en: 'e2e test files' } as L }
  ],
  sections: [
    {
      id: 'overview',
      title: { fr: 'Le projet', en: 'The project' },
      blocks: [
        {
          type: 'p',
          text: {
            fr: "PokéBooster est une application web (SPA) où un joueur connecté ouvre des boosters Pokémon - de n'importe quel set, autant qu'il le souhaite - et construit sa collection.",
            en: 'PokéBooster is a web app (SPA) where a signed-in player opens Pokémon boosters - from any set, as many as they like - and builds a collection.'
          }
        },
        {
          type: 'list',
          items: [
            {
              fr: 'Deux modes de jeu, chacun avec sa collection : <strong>Illimité</strong> (autant de boosters que souhaité) et <strong>Défi</strong> (100 pièces par booster, gagnées par une récompense quotidienne, des missions, le recyclage des doublons et des mini-jeux).',
              en: 'Two game modes, each with its own collection: <strong>Unlimited</strong> (as many boosters as you like) and <strong>Challenge</strong> (100 coins per booster, earned through a daily reward, missions, recycling duplicates and mini-games).'
            },
            {
              fr: 'Échanges entre joueurs, profils publics, fil des gros tirages en direct, classements, environ 1 210 succès par mode, liste de souhaits, historique des ouvertures.',
              en: 'Player-to-player trades, public profiles, a live feed of big pulls, leaderboards, around 1,210 achievements per mode, a wishlist, an opening history.'
            },
            {
              fr: 'Application installable (PWA), français et anglais, thème clair ou sombre.',
              en: 'Installable (PWA), French and English, light or dark theme.'
            },
            {
              fr: 'Catalogue de 176 sets et 20 670 cartes, importé depuis pokemontcg.io, avec les noms et images français de TCGdex.',
              en: 'A catalogue of 176 sets and 20,670 cards imported from pokemontcg.io, with French names and images from TCGdex.'
            }
          ]
        }
      ]
    },
    {
      id: 'constraints',
      title: { fr: 'Le problème à résoudre', en: 'The problem' },
      blocks: [
        {
          type: 'p',
          text: {
            fr: "Un jeu de collection n'a de sens que si les tirages sont crédibles et si l'état du jeu est fiable : les autres joueurs voient les collections, les classements et le fil en direct. Trois contraintes en découlent.",
            en: "A collecting game only works if pulls are believable and the game state can be trusted: other players see the collections, the leaderboards and the live feed. Three constraints follow."
          }
        },
        {
          type: 'list',
          items: [
            {
              fr: 'Des boosters conformes aux vrais taux de tirage d\'un set, pas un tirage uniforme.',
              en: "Boosters that follow a set's real pull rates, not a uniform random draw."
            },
            {
              fr: "Un état de jeu (cartes, pièces, échanges) que le navigateur ne peut pas falsifier.",
              en: 'A game state (cards, coins, trades) that the browser cannot tamper with.'
            },
            {
              fr: 'Aucun serveur applicatif à maintenir : un projet personnel doit rester léger à exploiter.',
              en: 'No application server to maintain: a personal project has to stay cheap to run.'
            }
          ]
        },
        {
          type: 'p',
          text: {
            fr: "Le prototype d'origine (JavaScript sans framework ni outillage, septembre 2024) gérait lui-même l'authentification. La refonte en Vue 3 part de ces trois contraintes et délègue entièrement l'authentification à Supabase Auth.",
            en: 'The original prototype (plain JavaScript with no framework or tooling, September 2024) handled authentication itself. The Vue 3 rebuild starts from these three constraints and delegates authentication entirely to Supabase Auth.'
          }
        }
      ]
    },
    {
      id: 'choices',
      title: { fr: 'Choix techniques', en: 'Technical choices' },
      blocks: [
        {
          type: 'choices',
          items: [
            {
              title: { fr: 'Supabase comme seul back-end', en: 'Supabase as the only back end' },
              why: {
                fr: "Comptes (Auth), base Postgres, API REST générée et temps réel dans un seul service : pas de serveur applicatif à écrire ni à héberger. Le navigateur parle directement à Supabase.",
                en: 'Accounts (Auth), a Postgres database, a generated REST API and realtime in a single service: no application server to write or host. The browser talks to Supabase directly.'
              },
              tradeoff: {
                fr: "La logique qui doit rester fiable est écrite en SQL, un langage moins confortable à tester et à faire évoluer que du code applicatif.",
                en: 'The logic that has to stay trustworthy is written in SQL, which is less comfortable to test and evolve than application code.'
              }
            },
            {
              title: { fr: 'La logique sensible dans des fonctions SQL (RPC)', en: 'Sensitive logic in SQL functions (RPC)' },
              why: {
                fr: "Tirer un booster, dépenser des pièces, échanger des cartes : tout ce que les autres joueurs voient ou qui a de la valeur est calculé et écrit par le serveur, dans des fonctions Postgres <code>SECURITY DEFINER</code>. Le navigateur affiche et demande. Ces fonctions sont limitées en fréquence (60 packs et 20 parties de mini-jeu par minute).",
                en: 'Opening a booster, spending coins, trading cards: everything other players can see or that carries value is computed and written by the server, in Postgres <code>SECURITY DEFINER</code> functions. The browser only displays and asks. These functions are rate limited (60 packs and 20 mini-game runs per minute).'
              },
              tradeoff: {
                fr: "Une exception assumée : les succès débloqués sont déclarés par le client, car le serveur ne peut pas recalculer environ 1 210 définitions écrites en JavaScript. Ils ne servent qu'à afficher un pourcentage anonyme, que rien ne classe ni ne récompense.",
                en: 'One deliberate exception: unlocked achievements are declared by the client, because the server cannot recompute around 1,210 definitions written in JavaScript. They only feed an anonymous percentage that nothing ranks or rewards.'
              }
            },
            {
              title: { fr: 'Un même code pour deux modes', en: 'One codebase for two modes' },
              why: {
                fr: "Les pages du mode Défi sont les mêmes composants avec une prop <code>mode</code> (la vue d'ouverture est réutilisée telle quelle), et un store Pinia par mode. En base, la clé de la table des collections est <code>(user_id, mode, card_id)</code>.",
                en: 'The Challenge pages are the same components with a <code>mode</code> prop (the opening view is reused as is), and one Pinia store per mode. In the database, the collections table key is <code>(user_id, mode, card_id)</code>.'
              },
              tradeoff: {
                fr: "Une même carte peut être possédée une fois par mode : chaque fonctionnalité doit préciser le mode concerné.",
                en: 'The same card can be owned once per mode: every feature has to say which mode it applies to.'
              }
            },
            {
              title: { fr: 'Tous les textes passent par vue-i18n', en: 'Every string goes through vue-i18n' },
              why: {
                fr: "Chaque chaîne visible est dans les fichiers de traduction anglais et français, jamais en dur dans un template. Un test unitaire vérifie notamment que chaque succès a ses traductions anglaise et française.",
                en: 'Every visible string lives in the English and French translation files, never hard-coded in a template. A unit test notably checks that every achievement has both its English and French translations.'
              },
              tradeoff: {
                fr: 'La moindre modification de texte touche deux fichiers.',
                en: 'Any text change touches two files.'
              }
            },
            {
              title: { fr: 'Un import de données hors du navigateur', en: 'A data import outside the browser' },
              why: {
                fr: "Les sets, cartes et prix viennent de pokemontcg.io, les noms et images français de TCGdex. Un script d'administration Node les importe avec la clé service role, qui n'est jamais dans le bundle, et un workflow GitHub Actions le relance deux fois par jour.",
                en: 'Sets, cards and prices come from pokemontcg.io, French names and images from TCGdex. An admin Node script imports them using the service role key, which is never in the bundle, and a GitHub Actions workflow reruns it twice a day.'
              },
              tradeoff: {
                fr: "Le catalogue dépend de services tiers : les URL d'images ont changé en 2026 (voir les difficultés).",
                en: 'The catalogue depends on third-party services: image URLs changed in 2026 (see the difficulties).'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'architecture',
      title: { fr: 'Architecture', en: 'Architecture' },
      blocks: [
        {
          type: 'flow',
          columns: [
            {
              title: { fr: 'Navigateur (build statique sur Vercel)', en: 'Browser (static build on Vercel)' },
              items: [
                { fr: "Vues Vue 3 et Vue Router (garde d'authentification, pages chargées à la demande)", en: 'Vue 3 views and Vue Router (auth guard, lazy-loaded pages)' },
                { fr: 'Stores Pinia : un par domaine, un par mode de jeu', en: 'Pinia stores: one per domain, one per game mode' },
                { fr: 'Couche <code>api/</code> au-dessus de supabase-js', en: '<code>api/</code> layer on top of supabase-js' },
                { fr: 'Utilitaires purs et testés (<code>src/utils</code>)', en: 'Pure, tested helpers (<code>src/utils</code>)' }
              ]
            },
            {
              title: { fr: 'Supabase', en: 'Supabase' },
              items: [
                { fr: 'Auth : comptes et sessions (jetons JWT)', en: 'Auth: accounts and sessions (JWT)' },
                { fr: 'PostgREST : tables et fonctions SQL (RPC)', en: 'PostgREST: tables and SQL functions (RPC)' },
                { fr: 'Realtime : fil en direct et échanges', en: 'Realtime: live feed and trades' },
                { fr: 'Postgres : RLS, triggers, fonctions <code>SECURITY DEFINER</code>', en: 'Postgres: RLS, triggers, <code>SECURITY DEFINER</code> functions' }
              ]
            },
            {
              title: { fr: 'Import (administration)', en: 'Import (admin)' },
              items: [
                { fr: 'pokemontcg.io : sets, cartes, prix', en: 'pokemontcg.io: sets, cards, prices' },
                { fr: 'TCGdex : noms et images en français', en: 'TCGdex: French names and images' },
                { fr: '<code>scripts/populate.mjs</code> avec la clé service role, jamais côté client', en: '<code>scripts/populate.mjs</code> with the service role key, never client-side' },
                { fr: 'GitHub Actions : synchro à minuit et à midi', en: 'GitHub Actions: sync at midnight and noon' }
              ]
            }
          ]
        },
        {
          type: 'p',
          text: {
            fr: "Règle de partage : le navigateur calcule l'ordre de révélation des cartes, les statistiques affichées, les filtres, les animations et les succès. Le serveur décide des cartes tirées, des pièces, des échanges et des classements.",
            en: 'Split of responsibilities: the browser computes the card reveal order, displayed statistics, filters, animations and achievements. The server decides the cards drawn, the coins, the trades and the leaderboards.'
          }
        }
      ]
    },
    {
      id: 'security',
      title: { fr: 'Modèle de sécurité', en: 'Security model' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fr: "<strong>Authentification : Supabase Auth, uniquement.</strong> Aucune table d'utilisateurs maison, aucun mot de passe comparé dans le code applicatif.",
              en: '<strong>Authentication: Supabase Auth only.</strong> No homemade users table, no password compared in application code.'
            },
            {
              fr: "<strong>La clé publique (anon) n'est pas un secret.</strong> C'est la Row Level Security qui protège les données : chaque table l'active, avec des règles du type <code>auth.uid() = user_id</code>.",
              en: '<strong>The public (anon) key is not a secret.</strong> Row Level Security protects the data: every table enables it, with rules like <code>auth.uid() = user_id</code>.'
            },
            {
              fr: "<strong>Les écritures sensibles passent par des fonctions <code>SECURITY DEFINER</code></strong> qui ne touchent que les lignes de <code>auth.uid()</code>. Les tables de jeu n'ont aucune règle d'écriture pour les clients.",
              en: '<strong>Sensitive writes go through <code>SECURITY DEFINER</code> functions</strong> that only touch the rows of <code>auth.uid()</code>. The game tables have no write rule for clients.'
            },
            {
              fr: "<strong>La clé service role ne quitte jamais l'administration</strong> : script d'import et secrets du dépôt GitHub, rien sous <code>src/</code>.",
              en: '<strong>The service role key never leaves the admin side</strong>: import script and GitHub repository secrets, nothing under <code>src/</code>.'
            }
          ]
        }
      ]
    },
    {
      id: 'difficulties',
      title: { fr: 'Difficultés rencontrées', en: 'Difficulties along the way' },
      blocks: [
        {
          type: 'stories',
          items: [
            {
              title: { fr: 'Des packs de sous-sets remplis de cartes rares', en: 'Subset packs full of rare cards' },
              problem: {
                fr: "Ouverts seuls, les sous-sets (Trainer Gallery, Galarian Gallery, Shiny Vault, Classic Collection) donnaient des boosters de 10 cartes rares : aucune commune, donc chaque emplacement retombait sur « n'importe quelle carte ».",
                en: 'Opened on their own, subsets (Trainer Gallery, Galarian Gallery, Shiny Vault, Classic Collection) produced boosters of 10 rare cards: no commons, so every slot fell back to "any card".'
              },
              fix: {
                fr: "Ces sous-sets ne s'ouvrent plus jamais seuls. Ils sont rattachés à un set parent (<code>parent_set_id</code>) avec une probabilité d'apparition (<code>subset_rate</code>, de 25 à 33 %) : le 8e emplacement d'un booster du parent devient une carte du sous-set avec cette probabilité.",
                en: 'These subsets are never opened on their own any more. They are attached to a parent set (<code>parent_set_id</code>) with an appearance rate (<code>subset_rate</code>, 25 to 33%): the 8th slot of a parent booster becomes a subset card with that probability.'
              }
            },
            {
              title: { fr: 'Un bug vert en local, cassé en ligne', en: 'A bug green locally, broken online' },
              problem: {
                fr: "L'API Supabase refuse tout <code>UPDATE</code> ou <code>DELETE</code> sans clause <code>WHERE</code> (extension pg-safeupdate). PGlite, utilisé pour tester les migrations, ne l'a pas : le bug des combats contre les bots passait en local et cassait en ligne.",
                en: 'The Supabase API rejects any <code>UPDATE</code> or <code>DELETE</code> without a <code>WHERE</code> clause (the pg-safeupdate extension). PGlite, used to test the migrations, does not have it: the bot-fight bug passed locally and broke online.'
              },
              fix: {
                fr: "Un utilitaire de test relit le corps de toutes les fonctions SQL du schéma public et liste ces requêtes ; la suite de tests exige que la liste soit vide.",
                en: 'A test helper reads the body of every SQL function in the public schema and lists such queries; the test suite requires that list to be empty.'
              }
            },
            {
              title: { fr: 'Une fonction onze fois plus lente en ligne', en: 'A function eleven times slower online' },
              problem: {
                fr: "La fonction qui compose le deck d'un bot prenait 0,4 s dans PGlite avec les vraies cartes et 4,5 s en ligne : Supabase compile d'abord la requête avec le JIT de Postgres, ce que PGlite ne fait pas.",
                en: 'The function that builds a bot deck took 0.4 s in PGlite with the real cards and 4.5 s online: Supabase first compiles the query with the Postgres JIT, which PGlite does not do.'
              },
              fix: {
                fr: "Mesure en ligne en appelant la fonction en REST, puis <code>set jit = off</code> sur cette fonction (migration 0036).",
                en: 'Measured online by calling the function over REST, then <code>set jit = off</code> on that function (migration 0036).'
              }
            },
            {
              title: { fr: "Des URL d'images qui changent", en: 'Image URLs that change' },
              problem: {
                fr: "En 2026, les images des nouveaux sets sont hébergées sur un autre domaine, avec un autre schéma d'URL : les URL reconstruites à partir de l'identifiant du set ne fonctionnaient plus.",
                en: 'In 2026 the images of new sets moved to another domain with another URL scheme: URLs rebuilt from the set id no longer worked.'
              },
              fix: {
                fr: "On stocke l'URL fournie par l'API au lieu de la deviner ; l'ancien schéma ne sert plus que de repli pour les lignes non renseignées.",
                en: 'The URL provided by the API is stored instead of being guessed; the old scheme is only a fallback for rows that are not filled in.'
              }
            },
            {
              title: { fr: 'Des écritures concurrentes sur les quantités', en: 'Concurrent writes on quantities' },
              problem: {
                fr: "Modifier la quantité d'une carte côté client en deux temps (lire, puis écrire) ouvre une condition de course.",
                en: "Changing a card's quantity client-side in two steps (read, then write) opens a race condition."
              },
              fix: {
                fr: "Toute mutation de quantité passe par une fonction SQL atomique, avec <code>INSERT ... ON CONFLICT DO UPDATE</code>.",
                en: 'Every quantity mutation goes through an atomic SQL function, using <code>INSERT ... ON CONFLICT DO UPDATE</code>.'
              }
            }
          ]
        }
      ]
    },
    {
      id: 'quality',
      title: { fr: 'Qualité et tests', en: 'Quality and tests' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fr: "<strong>Tests unitaires (Vitest)</strong> : 29 fichiers de tests sur les fonctions pures de <code>src/utils</code> (raretés, statistiques, économie du Défi, règles des mini-jeux, succès), dont un test qui échoue si la traduction d'un succès manque.",
              en: '<strong>Unit tests (Vitest)</strong>: 29 test files on the pure functions of <code>src/utils</code> (rarities, statistics, Challenge economy, mini-game rules, achievements), including a test that fails if an achievement translation is missing.'
            },
            {
              fr: "<strong>Tests de la base (PGlite, du Postgres compilé en WebAssembly)</strong> : chaque migration depuis la 0010 a sa suite, qui vérifie la RLS, les droits et les fonctions. La dernière migration est exécutée deux fois pour vérifier qu'elle peut être relancée.",
              en: '<strong>Database tests (PGlite, Postgres compiled to WebAssembly)</strong>: every migration since 0010 has its own suite checking RLS, grants and functions. The latest migration is run twice to check it can be re-run.'
            },
            {
              fr: "<strong>Tests de bout en bout (Playwright)</strong> : 16 fichiers de scénarios, sur ordinateur et sur Pixel 7, avec un faux Supabase en mémoire (aucun secret, aucun réseau). Des contrôles transverses vérifient qu'aucune page ne défile horizontalement sur un téléphone et qu'aucune n'écrit d'erreur dans la console.",
              en: '<strong>End-to-end tests (Playwright)</strong>: 16 scenario files, on desktop and Pixel 7, with an in-memory fake Supabase (no secret, no network). Cross-cutting checks make sure no page scrolls horizontally on a phone and none writes an error to the console.'
            },
            {
              fr: "<strong>CI GitHub Actions</strong> : tests unitaires, tests de la base, build et tests e2e à chaque push et pull request.",
              en: '<strong>GitHub Actions CI</strong>: unit tests, database tests, build and e2e tests on every push and pull request.'
            },
            {
              fr: "<strong>Documentation</strong> : six fichiers de documentation technique dans le dépôt (vue d'ensemble, front-end, base de données, référence API, parcours, outillage), tenus à jour avec le code.",
              en: '<strong>Documentation</strong>: six technical documentation files in the repository (overview, front end, database, API reference, user flows, tooling), kept up to date with the code.'
            }
          ]
        }
      ]
    },
    {
      id: 'limits',
      title: { fr: 'Limites connues', en: 'Known limits' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fr: "Le temps réel (fil et échanges) et les parcours à deux comptes ne sont pas testés automatiquement : ils reposent sur une checklist manuelle.",
              en: 'Realtime (feed and trades) and two-account flows are not covered by automated tests: they rely on a manual checklist.'
            },
            {
              fr: "La logique critique vit en SQL et se teste via PGlite, qui n'est pas Supabase : les deux écarts décrits plus haut (pg-safeupdate et JIT) en sont la preuve.",
              en: 'The critical logic lives in SQL and is tested through PGlite, which is not Supabase: the two gaps described above (pg-safeupdate and JIT) prove it.'
            }
          ]
        }
      ]
    }
  ] as CaseSection[]
}
