<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const showArchives = ref(false)

const activeProjects = computed(() => projects.filter((p) => !p.archived))
const archivedProjects = computed(() => projects.filter((p) => p.archived))
</script>

<template>
  <section id="portfolio" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-3">Projets</h2>

      <p class="text-center mb-5 text-muted">
        Jeux, outils et interfaces — principalement en <strong>Vue 3</strong> et <strong>JavaScript</strong>.
        Chaque projet avec son dev blog quand il y en a un.
      </p>

      <div class="row g-4">
        <ProjectCard v-for="project in activeProjects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>

  <section id="archives" class="py-5 archives-section">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="section-title">Archives</h2>
        <p class="text-muted">
          Prototypes et expérimentations — utiles pour voir l'évolution.
        </p>

        <button class="btn btn-outline-secondary mt-3" @click="showArchives = !showArchives">
          <i class="fas me-2" :class="showArchives ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          {{ showArchives ? 'Masquer' : `Voir les ${archivedProjects.length} projets archivés` }}
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
</template>

<style scoped>
.archives-section {
  background: rgba(var(--bs-secondary-rgb), 0.03);
}

[data-bs-theme="dark"] .archives-section {
  background: rgba(255, 255, 255, 0.015);
}

.archives-fade-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.archives-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
</style>
