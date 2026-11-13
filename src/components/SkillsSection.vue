<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'
import type { LocalizedText } from '@/i18n'

const { t } = useI18n()
const { localize } = useLocale()

interface Tech {
  name: string | LocalizedText
  icon: string
  iconType?: 'fab' | 'fas'
}

interface TechGroup {
  titleKey: string
  techs: Tech[]
}

const groups: TechGroup[] = [
  {
    titleKey: 'skills.languages',
    techs: [
      { name: 'JavaScript', icon: 'fa-js', iconType: 'fab' },
      { name: 'TypeScript', icon: 'fa-file-code', iconType: 'fas' },
      { name: 'Vue 3', icon: 'fa-vuejs', iconType: 'fab' },
      { name: 'Pinia', icon: 'fa-layer-group', iconType: 'fas' },
      { name: 'HTML5', icon: 'fa-html5', iconType: 'fab' },
      { name: 'CSS3 / Less', icon: 'fa-css3-alt', iconType: 'fab' },
    ]
  },
  {
    titleKey: 'skills.tooling',
    techs: [
      { name: 'Vite', icon: 'fa-bolt', iconType: 'fas' },
      { name: 'Git', icon: 'fa-git-alt', iconType: 'fab' },
      { name: 'Vue Router', icon: 'fa-route', iconType: 'fas' },
      { name: 'ESLint', icon: 'fa-code', iconType: 'fas' },
      { name: 'YouTrack', icon: 'fa-tasks', iconType: 'fas' },
      { name: { fr: 'Tests unitaires', en: 'Unit testing' }, icon: 'fa-vial', iconType: 'fas' },
      { name: 'Vitest', icon: 'fa-vial', iconType: 'fas' },
      { name: 'Playwright', icon: 'fa-masks-theater', iconType: 'fas' },
      { name: 'GitHub Actions', icon: 'fa-github', iconType: 'fab' },
    ]
  },
  {
    titleKey: 'skills.backend',
    techs: [
      { name: 'Supabase', icon: 'fa-database', iconType: 'fas' },
      { name: 'PostgreSQL', icon: 'fa-database', iconType: 'fas' },
      { name: { fr: 'Temps réel', en: 'Realtime' }, icon: 'fa-tower-broadcast', iconType: 'fas' },
      { name: 'PWA', icon: 'fa-mobile-screen', iconType: 'fas' },
    ]
  }
]
</script>

<template>
  <section id="skills" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5">{{ t('skills.title') }}</h2>

      <div class="row g-4">
        <div v-for="group in groups" :key="group.titleKey" class="col-md-4">
          <div class="skill-card h-100 p-4">
            <h3 class="h6 text-uppercase fw-bold mb-4 skill-group-title">{{ t(group.titleKey) }}</h3>
            <div class="d-flex flex-wrap gap-2">
              <span
                v-for="tech in group.techs"
                :key="localize(tech.name)"
                class="tech-pill"
              >
                <i :class="[tech.iconType ?? 'fas', tech.icon, 'me-1']" aria-hidden="true"></i>
                {{ localize(tech.name) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-group-title {
  letter-spacing: 0.08em;
  color: var(--primary);
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  background: rgba(var(--bs-primary-rgb), 0.08);
  color: inherit;
  border: 1px solid rgba(var(--bs-primary-rgb), 0.2);
  transition: background 0.2s, border-color 0.2s;
}

.tech-pill:hover {
  background: rgba(var(--bs-primary-rgb), 0.15);
  border-color: rgba(var(--bs-primary-rgb), 0.4);
}

[data-bs-theme="dark"] .tech-pill {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}

[data-bs-theme="dark"] .tech-pill:hover {
  background: rgba(255, 255, 255, 0.12);
}
</style>
