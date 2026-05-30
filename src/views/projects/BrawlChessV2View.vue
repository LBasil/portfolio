<script setup lang="ts">
import BlogNavbar from '@/components/BlogNavbar.vue'
import BlogArticle from '@/components/BlogArticle.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <BlogNavbar />

  <div class="container py-5 mt-5">
    <h1 class="text-center mb-4">Brawl Chess V2</h1>
    <p class="text-center text-muted mb-5">
      Un jeu mobile en 2D développé avec Vue.js. Suivez ici son évolution technique et créative.
    </p>

    <div class="text-center mt-5 mb-5">
      <span class="btn btn-outline-secondary disabled">← Projet en cours</span>
    </div>

    <section>
      <h2 class="mb-4">Journal de développement</h2>

      <div class="blog-timeline">

        <BlogArticle title="Analyser les besoins et étudier le projet" date="02 février 2026">
          <p>
            Avant d'écrire la moindre ligne de code, j'ai souhaité prendre le temps de poser les bases conceptuelles
            du projet. L'objectif n'est pas encore de résoudre des problèmes techniques, mais de comprendre précisément
            <strong>quel jeu je veux créer</strong> et <strong>quels systèmes il implique</strong>.
          </p>

          <h6>🎮 Intention du projet</h6>
          <p>
            Le projet est un jeu de stratégie <strong>1 contre 1</strong>, jouable sur mobile, dans un format
            <strong>tour par tour</strong>. Il s'appuie sur un plateau inspiré des échecs, non pas pour en reprendre
            les règles, mais pour bénéficier d'un langage visuel immédiatement compréhensible.
          </p>

          <h6>♟ Un héritage des échecs, sans leurs contraintes</h6>
          <p>Chaque pion possède :</p>
          <ul>
            <li>des <strong>points de vie</strong></li>
            <li>des <strong>capacités passives</strong></li>
            <li>et parfois des <strong>capacités actives</strong></li>
          </ul>
          <p>
            Le pion central est le <strong>Roi</strong>, aussi appelé le "Maître". Il dispose de davantage de points
            de vie, et sa destruction entraîne immédiatement la défaite du joueur.
          </p>

          <h6>🧱 Des unités spécialisées</h6>
          <ul>
            <li>des <strong>pions mur</strong>, incapables de se déplacer mais capables de se protéger</li>
            <li>des <strong>pions tourelle</strong>, qui attaquent automatiquement à chaque tour</li>
            <li>des unités capables de créer des <strong>zones d'influence</strong> ou des effets explosifs</li>
          </ul>

          <h6>🃏 Une dimension deck-building</h6>
          <p>
            Avant la partie, le joueur compose un <strong>deck de pions</strong>. Cette approche introduit une double
            lecture stratégique : une stratégie <strong>en amont</strong> lors de la construction du deck, et une
            stratégie <strong>en partie</strong> via le placement et le timing.
          </p>

          <h6>📱 Une contrainte forte : le format vertical</h6>
          <p>
            Le jeu est pensé exclusivement pour un affichage <strong>vertical</strong>. Cette contrainte influence
            la lisibilité du plateau, la hiérarchie des informations et la manière dont les choix sont proposés.
          </p>
        </BlogArticle>

        <BlogArticle title="Penser les systèmes" date="03 février 2026">
          <p>
            Après avoir posé l'intention générale du projet, la seconde étape a consisté à changer de point de vue.
            Il ne s'agit plus seulement d'imaginer un jeu, mais de commencer à le penser comme un
            <strong>système cohérent</strong>, capable d'évoluer, d'être maintenu et synchronisé avec un serveur.
          </p>

          <h6>🧠 Penser le jeu comme un état</h6>
          <p>
            <em>À tout instant, une partie peut être décrite intégralement par un état de jeu.</em>
          </p>
          <p>
            Cet état contient tout ce qui définit la réalité du jeu : le plateau, les unités, leurs caractéristiques,
            le joueur actif, ainsi que les effets ou décisions en cours.
          </p>

          <h6>✨ Capacités : le cœur du gameplay</h6>
          <p>Une capacité peut être décrite simplement comme :</p>
          <ul>
            <li>une condition</li>
            <li>un déclencheur</li>
            <li>un effet</li>
          </ul>

          <h6>⏱ Un jeu piloté par les événements</h6>
          <p>Le moteur du jeu repose sur une succession d'événements :</p>
          <ul>
            <li>début de tour</li>
            <li>déplacement d'une unité</li>
            <li>ciblage</li>
            <li>dégâts entrants</li>
            <li>destruction d'une unité</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Cœur du gameplay" date="04 février 2026">
          <p>
            Après avoir défini l'intention générale et les systèmes majeurs du jeu, il est temps de documenter
            le cœur du gameplay : le cycle d'un tour, le moteur d'événements et la manière dont le serveur garde
            le contrôle.
          </p>

          <h6>⏱ Le cycle d'un tour</h6>
          <pre><code>Début de tour
  ↓
Effets automatiques
  ↓
Phase de contrôle du joueur actif
  ↓
[ événements → réactions → décisions ]
  ↓
Résolution complète
  ↓
Effets de fin de tour
  ↓
Tour suivant</code></pre>

          <h6>🌐 La vision serveur dès la conception</h6>
          <ul>
            <li>Le serveur détient l'état unique de la partie (GameState)</li>
            <li>Il valide toutes les actions proposées par le joueur</li>
            <li>Il gère les interruptions et attend les décisions du joueur</li>
            <li>Le client n'est responsable que de l'affichage et de la collecte des choix</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Les évènements" date="04 février 2026">
          <p>
            Le gameplay ne peut pas être piloté uniquement par des tours ou des actions directes.
            Il repose sur un enchaînement d'événements et de réactions, capables de produire un jeu dynamique
            et extensible.
          </p>

          <h6>📦 Catégoriser les événements</h6>
          <ul>
            <li><strong>Événements de tour</strong> : début de tour, fin de tour, changement de joueur actif</li>
            <li><strong>Événements de plateau</strong> : entrée ou sortie d'une case, traversée d'une zone</li>
            <li><strong>Événements d'unité</strong> : unité ciblée, déplacée, invoquée ou détruite</li>
            <li><strong>Événements de combat</strong> : attaque déclarée, dégâts entrants, dégâts subis, esquive</li>
            <li><strong>Événements de décision</strong> : demande de choix, réponse du joueur</li>
          </ul>

          <h6>🔁 Exemple de chaîne événementielle</h6>
          <p>Lorsqu'une unité ennemie entre dans une zone :</p>
          <ul>
            <li>un événement d'entrée de case est émis</li>
            <li>une capacité passive réagit</li>
            <li>un effet de dégâts est appliqué</li>
            <li>un événement de dégâts entrants est généré</li>
            <li>une capacité réactive peut demander une décision</li>
            <li>la réponse du joueur détermine la suite des effets</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Le cœur du moteur" date="05 février 2026">
          <p>
            Toute la cohérence du projet repose sur une entité unique et maîtrisée : le <strong>GameState</strong>.
          </p>

          <h6>🧠 Le GameState comme source de vérité</h6>
          <p>
            Le GameState représente une photographie complète et cohérente de la partie à un instant donné.
            Rien n'existe dans le jeu s'il n'est pas exprimé dans le GameState.
          </p>

          <h6>📦 Ce que contient le GameState</h6>
          <ul>
            <li>les joueurs et leur état (ressources, points de vie, statut)</li>
            <li>le plateau et son contenu (cases, unités, zones)</li>
            <li>les unités et leurs propriétés actuelles</li>
            <li>les effets persistants actifs</li>
            <li>le tour en cours et la phase actuelle</li>
            <li>les décisions en attente</li>
          </ul>

          <h6>🚫 Ce que le GameState ne doit jamais contenir</h6>
          <ul>
            <li>de logique métier ou de règles de jeu</li>
            <li>de références à l'interface ou à des composants visuels</li>
            <li>d'états temporaires liés à une animation</li>
            <li>de calculs dérivables à la volée</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Un tour de jeu" date="06 février 2026">
          <p>
            Dans ce jeu, le tour par tour ne se limite pas à une alternance stricte entre deux joueurs.
            Il s'agit d'un enchaînement d'états, ponctué de fenêtres de réaction et de décisions.
          </p>

          <h6>🧩 Décomposer un tour</h6>
          <ul>
            <li>le début de tour</li>
            <li>la phase d'actions du joueur actif</li>
            <li>les fenêtres de réaction</li>
            <li>la résolution des événements</li>
            <li>la fin de tour</li>
          </ul>

          <h6>⚡ Fenêtres de réaction</h6>
          <p>Certaines actions ouvrent une fenêtre pendant laquelle l'adversaire peut intervenir :</p>
          <ul>
            <li>les esquives</li>
            <li>les contres</li>
            <li>les capacités défensives</li>
            <li>les choix du joueur ciblé</li>
          </ul>

          <h6>🛑 Le gel du jeu</h6>
          <p>
            Lorsqu'un choix est requis, le jeu entre dans un état d'attente. Aucun autre événement ne peut
            progresser tant que le joueur concerné n'a pas répondu.
          </p>
        </BlogArticle>

        <BlogArticle title="Les capacités" date="07 février 2026">
          <p>
            Ce sont elles qui donnent leur identité aux pions, créent les situations tactiques et génèrent
            les décisions intéressantes.
          </p>

          <h6>⚙️ Trois grandes familles de capacités</h6>
          <ul>
            <li><strong>Capacités passives</strong> : toujours actives, sans intervention directe</li>
            <li><strong>Capacités actives</strong> : déclenchées volontairement par le joueur</li>
            <li><strong>Capacités réactives</strong> : déclenchées par un événement adverse</li>
          </ul>

          <h6>⏳ Capacités et timing</h6>
          <p>Chaque capacité est liée à un moment précis du tour. Elle sait :</p>
          <ul>
            <li>quand elle peut se déclencher</li>
            <li>si elle interrompt le jeu</li>
            <li>si elle attend une décision</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Le plateau de jeu" date="08 février 2026">
          <p>
            Dans ce projet, le plateau n'est pas un simple décor. C'est un système à part entière,
            porteur de règles et de déclencheurs.
          </p>

          <h6>🧭 Zones et territoires</h6>
          <p>Au-delà des cases individuelles, le plateau est structuré en zones :</p>
          <ul>
            <li>zone de danger</li>
            <li>zone de contrôle</li>
            <li>zone de protection</li>
            <li>zone d'activation passive</li>
          </ul>

          <h6>⚡ Déclencheurs spatiaux</h6>
          <p>Certaines capacités ou effets se déclenchent lorsqu'une unité :</p>
          <ul>
            <li>entre dans une case</li>
            <li>quitte une zone</li>
            <li>termine son déplacement</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Les unités" date="09 février 2026">
          <p>
            Dans ce jeu, une unité n'est pas un simple pion. C'est une entité complète, porteuse de règles,
            de décisions et d'identité.
          </p>

          <h6>🧩 Identité et rôle</h6>
          <ul>
            <li>le roi, pièce maîtresse à protéger</li>
            <li>les unités offensives</li>
            <li>les unités défensives</li>
            <li>les unités de contrôle</li>
            <li>les unités utilitaires</li>
          </ul>

          <h6>❤️ Points de vie et persistance</h6>
          <p>Contrairement aux échecs classiques, les unités possèdent des points de vie. Elles ne disparaissent
          pas immédiatement, ce qui permet des échanges progressifs et des retournements de situation.</p>

          <h6>⚙️ Capacités intégrées</h6>
          <p>Une unité peut posséder :</p>
          <ul>
            <li>des capacités passives permanentes</li>
            <li>des capacités actives déclenchables</li>
            <li>des capacités réactives contextuelles</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Deckbuilding comme cœur stratégique" date="10 février 2026">
          <p>
            Une mécanique s'impose rapidement comme le cœur du système : le <strong>deckbuilding d'unités</strong>.
          </p>

          <h6>Une armée limitée mais libre</h6>
          <ul>
            <li>30 unités maximum dans la partie</li>
            <li>+1 roi obligatoire</li>
            <li>Une unité morte est définitivement perdue</li>
          </ul>

          <h6>Composition du deck</h6>
          <p>Le joueur construit librement son armée avant le match. Exemples de decks possibles :</p>
          <ul>
            <li>15 tourelles, 3 murs, 12 archers</li>
            <li>30 unités rapides et fragiles</li>
            <li>Deck défensif centré sur le roi</li>
            <li>Deck agressif orienté pression constante</li>
          </ul>

          <h6>Deck actif pendant la partie</h6>
          <ul>
            <li>Un <strong>deck actif de 8 unités</strong></li>
            <li>Le roi est obligatoire mais ne prend pas de slot</li>
            <li>Un tirage léger avec une RNG contrôlée</li>
          </ul>

          <h6>Objectifs de design</h6>
          <ul>
            <li>Easy to learn</li>
            <li>Hard to master</li>
            <li>Parties rapides</li>
            <li>Choix stratégiques forts</li>
            <li>Grande rejouabilité</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Un tour de jeu (règles de placement)" date="11 février 2026">
          <p>
            Une fois les bases du deckbuilding et du plateau définies, la question centrale devient : comment se
            déroule un tour de jeu ?
          </p>

          <h6>Placement uniquement en début de tour</h6>
          <p>
            Les unités ne peuvent être placées qu'au début du tour du joueur. Cette règle évite les invocations
            surprises et maintient une lecture claire de la situation.
          </p>
          <p>
            Le joueur peut placer ses unités uniquement dans sa moitié du plateau, sur les quatre rangées les plus
            proches de lui.
          </p>

          <h6>Trois actions par tour</h6>
          <p>Chaque joueur dispose d'un maximum de <strong>3 actions</strong> pendant son tour :</p>
          <ul>
            <li>Déplacements</li>
            <li>Placements d'unités</li>
            <li>Attaques</li>
          </ul>

          <h6>L'attaque met fin au tour</h6>
          <p>
            <strong>Lancer une attaque met immédiatement fin au tour.</strong> Cette règle introduit une tension
            importante : faut-il attaquer maintenant ou se repositionner pour un tour plus avantageux ?
          </p>

          <h6>Un rythme pensé pour le mobile</h6>
          <ul>
            <li>Peu d'actions mais significatives</li>
            <li>Décisions rapides</li>
            <li>Timing important</li>
            <li>Positionnement central</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Comportement des unités" date="12 février 2026">
          <p>
            L'étape suivante consiste à préciser le comportement des unités sur le plateau. Le jeu repose sur une
            grille 8×8 inspirée des échecs. Chaque case ne peut contenir qu'une seule unité.
          </p>

          <h6>Déplacements propres à chaque unité</h6>
          <ul>
            <li>Déplacements en ligne</li>
            <li>Déplacements en diagonale</li>
            <li>Mouvements rapides</li>
            <li>Mouvements limités</li>
            <li>Mobilité conditionnelle</li>
          </ul>

          <h6>Attaques et portée</h6>
          <ul>
            <li>Attaques au corps à corps</li>
            <li>Attaques à distance</li>
            <li>Portée variable</li>
            <li>Ligne de vue nécessaire</li>
            <li>Zones d'effet</li>
          </ul>
          <p>
            Une attaque consomme une action et met immédiatement fin au tour du joueur. Cette règle rend chaque
            offensive décisive et empêche les enchaînements trop explosifs.
          </p>
        </BlogArticle>

        <BlogArticle title="Résumé final du brainstorming" date="13 février 2026">
          <p>
            Après avoir posé les bases du moteur de jeu, du système d'événements et du déroulement général d'un tour,
            il est désormais possible de préciser un élément central du gameplay : <strong>la gestion du plateau,
            des placements et des actions disponibles pour le joueur</strong>.
          </p>

          <h6>♟ Le plateau et l'espace de jeu</h6>
          <p>
            La partie se déroule sur un plateau de <strong>64 cases (8×8)</strong>. Chaque joueur possède une moitié
            du plateau, soit <strong>4 rangées</strong>, qui constituent sa zone de placement.
          </p>

          <h6>🎮 Les actions disponibles pendant un tour</h6>
          <p>
            Un joueur peut effectuer jusqu'à <strong>trois actions par tour</strong> (déplacements, placements,
            attaques). Cependant, <strong>déclarer une attaque met immédiatement fin aux autres actions du tour.</strong>
          </p>

          <h6>⚡ Réactions adverses</h6>
          <p>
            Lorsqu'une action non passive se produit, le joueur adverse peut recevoir une opportunité de réaction.
            Une fenêtre de décision s'ouvre pour lui, limitée dans le temps (environ <strong>10 secondes</strong>).
          </p>

          <h6>✨ Résolution des passifs</h6>
          <p>Lorsqu'un effet doit choisir une cible parmi plusieurs unités possibles, la priorité est donnée :</p>
          <ul>
            <li>à l'unité la plus proche</li>
            <li>en cas d'égalité, à la première placée</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="Structure réelle du GameState V1" date="14 février 2026">
          <p>
            Il est temps de définir un élément fondamental du projet : <strong>la structure réelle de l'état du
            jeu</strong>, souvent appelée <em>GameState</em>.
          </p>

          <h6>Les éléments principaux du GameState</h6>

          <h6>Le plateau</h6>
          <p>Le plateau est une grille de 8×8 cases. Il doit permettre de savoir :</p>
          <ul>
            <li>quelle unité occupe chaque case</li>
            <li>si la case est libre</li>
            <li>si un obstacle est présent</li>
          </ul>

          <h6>Les unités</h6>
          <p>Une unité doit contenir au minimum :</p>
          <ul>
            <li>un identifiant unique</li>
            <li>son propriétaire (joueur 1 ou 2)</li>
            <li>sa position</li>
            <li>ses points de vie</li>
            <li>son type</li>
            <li>ses effets actifs</li>
            <li>ses capacités passives</li>
          </ul>

          <h6>Le tour en cours</h6>
          <ul>
            <li>quel joueur est actif</li>
            <li>combien d'actions il lui reste</li>
            <li>dans quelle phase du tour on se trouve</li>
          </ul>

          <h6>Décisions en attente</h6>
          <p>Une décision en attente peut inclure :</p>
          <ul>
            <li>le joueur concerné</li>
            <li>le type de réaction possible</li>
            <li>le délai restant</li>
            <li>les options disponibles</li>
          </ul>

          <h6>Pourquoi cette étape marque le début du développement</h6>
          <p>Une fois cette structure validée, il devient possible de :</p>
          <ul>
            <li>coder un moteur de règles</li>
            <li>simuler une partie en local</li>
            <li>écrire des tests</li>
            <li>connecter une interface</li>
          </ul>
          <p>
            Cette étape marque donc la transition entre la réflexion pure et l'implémentation technique.
            À partir de là, le jeu commencera réellement à prendre vie.
          </p>
        </BlogArticle>

      </div>
    </section>

    <div class="text-center mt-5">
      <router-link to="/" class="btn btn-outline-secondary">← Retour au portfolio</router-link>
    </div>
  </div>

  <AppFooter />
</template>
