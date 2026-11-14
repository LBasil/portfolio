<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()

const showArchives = ref(false)

const activeProjects = computed(() => projects.filter((p) => !p.archived))
const archivedProjects = computed(() => projects.filter((p) => p.archived))
</script>

<template>
  <section id="portfolio" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-3">{{ t('projects.title') }}</h2>

      <p class="text-center mb-5 text-muted" v-html="t('projects.intro')"></p>

      <div class="row g-4 justify-content-center">
        <ProjectCard v-for="project in activeProjects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>

  <section id="archives" class="py-5 archives-section">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="section-title">{{ t('projects.archivesTitle') }}</h2>
        <p class="text-muted">
          {{ t('projects.archivesIntro') }}
        </p>

        <button class="btn btn-outline-secondary mt-3" :aria-expanded="showArchives" aria-controls="archives-list" @click="showArchives = !showArchives">
          <i class="fas me-2" :class="showArchives ? 'fa-chevron-up' : 'fa-chevron-down'" aria-hidden="true"></i>
          {{ showArchives ? t('projects.hide') : t('projects.show', { n: archivedProjects.length }) }}
        </button>
      </div>

      <Transition name="archives-fade">
        <div v-if="showArchives" id="archives-list" class="row g-4">
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
