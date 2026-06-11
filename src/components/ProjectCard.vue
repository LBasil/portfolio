<script setup lang="ts">
import type { Project } from '@/types'
import { useRouter } from 'vue-router'

const props = defineProps<{ project: Project }>()
const router = useRouter()

function openBlog() {
  if (props.project.blogUrl) {
    router.push(props.project.blogUrl)
  }
}

const BADGE_CLASSES: Record<string, string> = {
  JavaScript:         'badge-js',
  TypeScript:         'badge-ts',
  VueJS:              'badge-vue',
  'Love2D':           'badge-love',
  Godot:              'badge-godot',
  API:                'badge-api',
  Game:               'badge-game',
  'In-Progress':      'badge-wip',
  'Prototype finished':'badge-done',
  Finished:           'badge-done',
  Paused:             'badge-paused',
}

function badgeClass(badge: string): string {
  return BADGE_CLASSES[badge] ?? 'badge-default'
}
</script>

<template>
  <div class="col-lg-4 col-md-6">
    <div class="card project-card shadow-sm h-100">
      <img v-if="project.image" :src="project.image" class="card-img-top" :alt="project.title" loading="lazy">
      <div v-else class="card-img-top placeholder-img d-flex align-items-center justify-content-center flex-column gap-2" role="img" :aria-label="`Image non disponible pour ${project.title}`">
        <i class="fas fa-gamepad fa-3x placeholder-icon" aria-hidden="true"></i>
        <span class="placeholder-label" aria-hidden="true">En développement</span>
      </div>

      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text flex-grow-1 text-muted small">{{ project.description }}</p>

        <div class="mb-3">
          <span
            v-for="badge in project.badges"
            :key="badge"
            class="project-badge me-1 mb-1"
            :class="badgeClass(badge)"
          >
            {{ badge }}
          </span>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <a v-if="project.url" :href="project.url" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer" :aria-label="`Voir le projet ${project.title} (nouvelle fenêtre)`">
            <i class="fas fa-arrow-up-right-from-square me-1" aria-hidden="true"></i>Voir le projet
          </a>
          <button v-if="project.hasBlog" class="btn btn-outline-secondary btn-sm" @click="openBlog" :aria-label="`Voir le dev blog de ${project.title}`">
            <i class="fas fa-book-open me-1" aria-hidden="true"></i>Dev blog
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.placeholder-img {
  height: 200px;
  background: rgba(var(--bs-primary-rgb), 0.05);
  border-bottom: 1px solid rgba(var(--bs-primary-rgb), 0.1);
}

.placeholder-icon {
  color: var(--primary);
  opacity: 0.3;
}

.placeholder-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.35;
}

[data-bs-theme="dark"] .placeholder-img {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.06);
}

.project-badge {
  display: inline-block;
  padding: 0.2em 0.6em;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* Langages — couleurs vérifiées ≥ 4.5:1 contre fond blanc */
.badge-js      { background: #f7df1e22; color: #7a5500; border: 1px solid #f7df1e66; }
.badge-ts      { background: #3178c622; color: #1a63b4; border: 1px solid #3178c655; }
.badge-vue     { background: #42b88322; color: #1a7550; border: 1px solid #42b88355; }
.badge-love    { background: #e8405522; color: #b02a1e; border: 1px solid #e8405555; }
.badge-godot   { background: #47869922; color: #1e5f7a; border: 1px solid #47869955; }
.badge-api     { background: #6c5ce722; color: #4e3fbf; border: 1px solid #6c5ce755; }

/* Catégorie */
.badge-game    { background: #a29bfe22; color: #5040cc; border: 1px solid #a29bfe55; }

/* Statut */
.badge-wip     { background: #fd7e1422; color: #a84c08; border: 1px solid #fd7e1455; }
.badge-done    { background: #20c99722; color: #0d7558; border: 1px solid #20c99755; }
.badge-paused  { background: #adb5bd22; color: #5a6470; border: 1px solid #adb5bd55; }
.badge-default { background: rgba(var(--bs-secondary-rgb), 0.12); color: var(--bs-secondary); border: 1px solid rgba(var(--bs-secondary-rgb), 0.2); }

[data-bs-theme="dark"] .badge-js     { color: #e6c200; }
[data-bs-theme="dark"] .badge-ts     { color: #5aa0e8; }
[data-bs-theme="dark"] .badge-vue    { color: #42b883; }
[data-bs-theme="dark"] .badge-done   { color: #2ecc71; }
[data-bs-theme="dark"] .badge-wip    { color: #fd9644; }
[data-bs-theme="dark"] .badge-paused { color: #adb5bd; }
[data-bs-theme="dark"] .badge-game   { color: #a29bfe; }
[data-bs-theme="dark"] .badge-api    { color: #9d8fff; }
[data-bs-theme="dark"] .badge-godot  { color: #47a5c9; }
[data-bs-theme="dark"] .badge-love   { color: #f07070; }
[data-bs-theme="dark"] .badge-js     { color: #e6c200; }
</style>
