<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const showArchives = ref(false)

const activeProjects = computed(() => projects.filter((p) => !p.archived))
const archivedProjects = computed(() => projects.filter((p) => p.archived))

function toggleArchives() {
  showArchives.value = !showArchives.value
}
</script>

<template>
  <section id="portfolio" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-3">Projets Front-end</h2>

      <p class="text-center mb-5 text-muted">
        Sélection de projets réalisés en JavaScript, Vue.js et intégration web.
      </p>

      <div class="row g-4">
        <ProjectCard v-for="project in activeProjects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>

  <section id="archives" class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Projets Archivés</h2>
        <p class="lead">Projets plus anciens illustrant mon évolution technique.</p>

        <button class="btn btn-outline-primary mt-3" @click="toggleArchives">
          <i class="fas me-2" :class="showArchives ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          {{ showArchives ? 'Masquer les projets archivés' : 'Afficher les projets archivés' }}
        </button>
      </div>

      <Transition name="archives-fade">
        <div v-if="showArchives" class="row g-4">
          <ProjectCard
            v-for="project in archivedProjects"
            :key="project.title"
            :project="project"
          />
        </div>
      </Transition>
    </div>
  </section>

  <section id="universe" class="py-5">
    <div class="container">
      <h2 class="text-center">Projet créatif : BaseX</h2>
      <p class="text-center mb-4">
        Univers de jeu original avec ses règles, ses personnages et son lore.
        Expérimentation autour de l'IA pour explorer ses capacités et ses limites.
      </p>
      <div class="text-center">
        <a href="universe.html" class="btn btn-outline-primary btn-lg">
          Explorer l'univers
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.archives-fade-enter-active {
  transition: opacity 0.4s ease;
}
.archives-fade-enter-from {
  opacity: 0;
}
</style>
