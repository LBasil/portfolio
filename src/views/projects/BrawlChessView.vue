<script setup lang="ts">
import BlogNavbar from '@/components/BlogNavbar.vue'
import BlogArticle from '@/components/BlogArticle.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <BlogNavbar />

  <div class="container py-5 mt-5">
    <h1 class="text-center mb-4">Brawl Chess</h1>
    <p class="text-center text-muted mb-5">
      Un jeu mobile en 2D développé avec Love2D. Suivez ici son évolution technique et créative.
    </p>

    <div class="text-center mt-5 mb-5">
      <a href="https://github.com/LBasil/Brawl-Chess" target="_blank" class="btn btn-outline-secondary">
        ← Lien vers le projet
      </a>
    </div>

    <section>
      <h2 class="mb-4">Journal de développement</h2>

      <div class="blog-timeline">
        <BlogArticle title="📚 Documentation Complète : Brawl Chess" date="09 mai 2025">
          <p>
            Cette documentation couvre chaque aspect du projet Brawl Chess, un jeu tactique tour par tour développé
            avec un client Love2D (Lua) et un serveur Java. Elle détaille le code Lua, le serveur Java, et l'architecture
            globale pour faciliter la maintenance et la compréhension.
          </p>

          <h3 class="h5 mb-3">Aperçu Général 🌍</h3>
          <p>
            Brawl Chess est un jeu où deux camps (joueur et ennemi) s'affrontent sur un plateau 8x8. Les pions
            (Sniper, Tourelle, etc.) ont des mouvements et actions uniques. Le client Love2D gère l'interface et les
            interactions, tandis que le serveur Java valide les règles et maintient l'état du jeu.
          </p>
          <ul>
            <li><strong>Client (Lua)</strong> : Affiche le plateau, gère les clics, envoie des requêtes TCP au serveur.</li>
            <li><strong>Serveur (Java)</strong> : Charge les pions depuis <code>pions.txt</code>, valide les mouvements et actions, gère les tours.</li>
            <li><strong>Communication</strong> : Le client envoie des JSON au serveur, qui répond avec des JSON.</li>
          </ul>

          <h3 class="h5 mb-3 mt-4">Architecture Client-Serveur 🏗️</h3>
          <p>
            La communication TCP permet une séparation claire entre logique de jeu et rendu visuel.
            Le serveur Java maintient l'état autoritaire de la partie, garantissant la cohérence des règles.
          </p>

          <h3 class="h5 mb-3 mt-4">Système de pions ♟️</h3>
          <p>
            Chaque pion possède des caractéristiques uniques : portée d'attaque, pattern de déplacement, points de vie.
            Le fichier <code>pions.txt</code> permet de configurer les unités sans modifier le code.
          </p>

          <h3 class="h5 mb-3 mt-4">Bilan du prototype ✅</h3>
          <p>
            Le prototype Brawl Chess a démontré la faisabilité d'une architecture client-serveur pour un jeu de stratégie
            mobile. Les bases sont posées pour une V2 plus complète, avec une interface mobile optimisée en Vue.js.
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
