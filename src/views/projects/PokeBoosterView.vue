<script setup lang="ts">
import { onUnmounted, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import BlogNavbar from '@/components/BlogNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useLocale } from '@/composables/useLocale'
import { pokeboosterCase as study } from '@/data/pokeboosterCase'

const { t } = useI18n()
const { localize } = useLocale()

// Titre d'onglet propre à la page, restauré en quittant la route.
watchEffect(() => {
  document.title = `PokéBooster - ${t('case.caseStudy')} | ${t('nav.brand')}`
})
onUnmounted(() => {
  document.title = t('meta.title')
})
</script>

<template>
  <BlogNavbar />

  <main id="main-content" class="container py-5 mt-5 case-study">
    <router-link to="/#portfolio" class="small text-decoration-none">← {{ t('case.back') }}</router-link>

    <header class="mt-3 mb-5">
      <p class="text-uppercase small fw-semibold case-kicker mb-1">{{ t('case.caseStudy') }}</p>
      <h1 class="mb-3">PokéBooster</h1>
      <p class="lead">{{ localize(study.tagline) }}</p>

      <dl class="case-meta row g-3 mb-4">
        <div class="col-md-4">
          <dt>{{ t('case.role') }}</dt>
          <dd>{{ localize(study.meta.role) }}</dd>
        </div>
        <div class="col-md-4">
          <dt>{{ t('case.period') }}</dt>
          <dd>{{ localize(study.meta.period) }}</dd>
        </div>
        <div class="col-md-4">
          <dt>{{ t('case.status') }}</dt>
          <dd>{{ localize(study.meta.status) }}</dd>
        </div>
      </dl>

      <ul class="list-unstyled d-flex flex-wrap gap-2 mb-4" :aria-label="t('case.stack')">
        <li v-for="tech in study.meta.stack" :key="tech" class="case-pill">{{ tech }}</li>
      </ul>

      <div class="d-flex flex-wrap gap-2">
        <a :href="study.demoUrl" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-arrow-up-right-from-square me-2" aria-hidden="true"></i>{{ t('case.demo') }}
        </a>
        <a :href="study.repoUrl" class="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github me-2" aria-hidden="true"></i>{{ t('case.code') }}
        </a>
      </div>
    </header>

    <div class="row g-3 mb-5" role="list">
      <div v-for="fact in study.facts" :key="localize(fact.label)" class="col-6 col-md-3" role="listitem">
        <div class="case-fact">
          <div class="case-fact-value">{{ localize(fact.value) }}</div>
          <div class="case-fact-label">{{ localize(fact.label) }}</div>
        </div>
      </div>
    </div>

    <section v-for="section in study.sections" :id="section.id" :key="section.id" class="mb-5">
      <h2 class="h3 mb-3">{{ localize(section.title) }}</h2>

      <template v-for="(block, index) in section.blocks" :key="index">
        <p v-if="block.type === 'p'" v-html="localize(block.text)"></p>

        <ul v-else-if="block.type === 'list'" class="case-list">
          <li v-for="item in block.items" :key="localize(item)" v-html="localize(item)"></li>
        </ul>

        <div v-else-if="block.type === 'choices'" class="d-grid gap-3">
          <article v-for="item in block.items" :key="localize(item.title)" class="case-card">
            <h3 class="h6 mb-2">{{ localize(item.title) }}</h3>
            <p class="mb-2"><span class="case-label">{{ t('case.why') }}</span> <span v-html="localize(item.why)"></span></p>
            <p class="mb-0 text-muted"><span class="case-label">{{ t('case.tradeoff') }}</span> <span v-html="localize(item.tradeoff)"></span></p>
          </article>
        </div>

        <div v-else-if="block.type === 'stories'" class="d-grid gap-3">
          <article v-for="item in block.items" :key="localize(item.title)" class="case-card">
            <h3 class="h6 mb-2">{{ localize(item.title) }}</h3>
            <p class="mb-2"><span class="case-label">{{ t('case.problem') }}</span> <span v-html="localize(item.problem)"></span></p>
            <p class="mb-0"><span class="case-label">{{ t('case.fix') }}</span> <span v-html="localize(item.fix)"></span></p>
          </article>
        </div>

        <div v-else-if="block.type === 'flow'" class="case-flow mb-4">
          <div v-for="column in block.columns" :key="localize(column.title)" class="case-flow-col">
            <h3 class="h6">{{ localize(column.title) }}</h3>
            <ul class="mb-0">
              <li v-for="item in column.items" :key="localize(item)" v-html="localize(item)"></li>
            </ul>
          </div>
        </div>
      </template>
    </section>

    <p class="small">
      <a :href="study.docsUrl" target="_blank" rel="noopener noreferrer">{{ t('case.docs') }}</a>
    </p>
  </main>

  <AppFooter />
</template>

<style scoped>
.case-study {
  max-width: 920px;
}

/* La règle globale `section p` centre les paragraphes dans 700px : ici le texte est aligné à gauche. */
.case-study section p {
  max-width: none;
  margin: 0 0 1rem;
}

.case-kicker {
  letter-spacing: 0.12em;
  color: var(--primary);
}

.case-meta dt {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--bs-secondary-color);
  font-weight: 600;
}

.case-meta dd {
  margin: 0;
}

.case-pill {
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  background: rgba(var(--bs-primary-rgb), 0.08);
  border: 1px solid rgba(var(--bs-primary-rgb), 0.2);
}

[data-bs-theme="dark"] .case-pill {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}

.case-fact,
.case-card,
.case-flow-col {
  padding: 1rem 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(var(--bs-primary-rgb), 0.15);
  background: rgba(var(--bs-primary-rgb), 0.04);
}

[data-bs-theme="dark"] .case-fact,
[data-bs-theme="dark"] .case-card,
[data-bs-theme="dark"] .case-flow-col {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}

.case-fact-value {
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--primary);
}

.case-fact-label {
  font-size: 0.82rem;
  margin-top: 0.25rem;
}

.case-label {
  font-weight: 700;
  margin-right: 0.35rem;
}

.case-list {
  padding-left: 1.2rem;
}

.case-list li {
  margin-bottom: 0.6rem;
}

.case-flow {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.case-flow-col ul {
  padding-left: 1.1rem;
  font-size: 0.9rem;
}

.case-flow-col li {
  margin-bottom: 0.4rem;
}

@media (max-width: 767.98px) {
  .case-flow {
    grid-template-columns: 1fr;
  }
}

:deep(code) {
  font-size: 0.85em;
  word-break: break-word;
}
</style>
