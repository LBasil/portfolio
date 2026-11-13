<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCountUp } from '@/composables/useCountUp'
import { useLocale } from '@/composables/useLocale'
import { timelineEntries } from '@/data/timeline'
import { projects } from '@/data/projects'
import { background } from '@/data/background'

const { t } = useI18n()
const { localize } = useLocale()

const ANKAMA_START = new Date('2023-09-01')
const yearsAtAnkama = Math.floor(
  (Date.now() - ANKAMA_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
)

const contributions = useCountUp(timelineEntries.length)
const years         = useCountUp(yearsAtAnkama)
const sideProjects  = useCountUp(projects.length)

const stats = computed(() => [
  { target: timelineEntries.length, countUp: contributions, suffix: '',  label: t('about.statContributions'), sublabel: t('about.statContributionsSub') },
  { target: yearsAtAnkama,          countUp: years,         suffix: '+', label: t('about.statYears'),         sublabel: t('about.statYearsSub', { year: new Date().getFullYear() }) },
  { target: projects.length,        countUp: sideProjects,  suffix: '',  label: t('about.statProjects'),      sublabel: t('about.statProjectsSub') },
])
</script>

<template>
  <section id="about" class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="section-title mb-4">{{ t('about.title') }}</h2>

          <div class="avatar-lg mb-4 mx-auto" style="width: 150px; height: 150px;">
            <img src="/images/avatar.webp" :alt="t('about.avatarAlt')"
              class="rounded-circle img-thumbnail w-100 h-100" style="object-fit: cover;">
          </div>

          <p class="lead mb-3" v-html="t('about.p1')"></p>
          <p class="mb-3" v-html="t('about.p2')"></p>
          <p class="mb-5" v-html="t('about.p3')"></p>

          <!-- Stats row -->
          <div class="row g-3 justify-content-center">
            <div
              v-for="stat in stats"
              :key="stat.label"
              :ref="(element) => { stat.countUp.el.value = element as HTMLElement | null }"
              class="col-4 col-md-auto"
            >
              <div
                class="stat-card"
                role="group"
                :aria-label="t('about.statAria', { value: stat.target, suffix: stat.suffix, label: stat.label, sub: stat.sublabel })"
              >
                <div class="stat-number" aria-hidden="true">
                  {{ stat.countUp.displayed }}<span class="stat-suffix">{{ stat.suffix }}</span>
                </div>
                <div class="stat-label" aria-hidden="true">{{ stat.label }}</div>
                <div class="stat-sublabel" aria-hidden="true">{{ stat.sublabel }}</div>
              </div>
            </div>
          </div>

          <!-- Parcours -->
          <h3 class="h5 mt-5 mb-3">{{ t('about.pathTitle') }}</h3>
          <ul class="path-list list-unstyled text-start mx-auto">
            <li v-for="item in background" :key="item.place + localize(item.title)" class="path-item">
              <span class="path-period">{{ localize(item.period) }}</span>
              <span class="path-body">
                <strong>{{ localize(item.title) }}</strong> - {{ item.place }}
                <span v-if="item.detail" class="d-block text-muted small">{{ localize(item.detail) }}</span>
              </span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.path-list {
  max-width: 640px;
}

.path-item {
  display: flex;
  gap: 1rem;
  padding: 0.6rem 0;
  border-top: 1px solid rgba(var(--bs-secondary-rgb), 0.2);
  font-size: 0.92rem;
}

.path-item:first-child {
  border-top: 0;
}

.path-period {
  flex: 0 0 9.5rem;
  color: var(--bs-secondary-color);
  font-size: 0.82rem;
  padding-top: 0.1rem;
}

@media (max-width: 575.98px) {
  .path-item {
    flex-direction: column;
    gap: 0.1rem;
  }
  .path-period {
    flex-basis: auto;
  }
}

.stat-card {
  padding: 1rem 0.5rem;
  border-radius: 12px;
  min-width: 120px;
  background: rgba(var(--bs-primary-rgb), 0.05);
  border: 1px solid rgba(var(--bs-primary-rgb), 0.12);
  transition: transform 0.2s, border-color 0.2s;
}

.stat-card:hover {
  transform: translateY(-3px);
  border-color: rgba(var(--bs-primary-rgb), 0.3);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-suffix {
  font-size: 1.4rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.82rem;
  font-weight: 600;
  margin-top: 0.35rem;
}

.stat-sublabel {
  font-size: 0.72rem;
  color: var(--bs-secondary-color);
  margin-top: 0.15rem;
}

[data-bs-theme="dark"] .stat-card {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}
</style>
