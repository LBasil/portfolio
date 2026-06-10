<script setup lang="ts">
import type { TimelineEntry } from '@/types'

defineProps<{ entry: TimelineEntry }>()

const TYPE_LABELS: Record<string, string> = {
  maj:     'MÀJ',
  devblog: 'Devblog',
  live:    'Live',
}
</script>

<template>
  <div class="timeline-item" role="listitem">
    <img :src="entry.image" :alt="entry.alt" loading="lazy">
    <div class="timeline-content">
      <div class="d-flex align-items-center gap-2 mb-1">
        <span class="type-badge" :class="`type-${entry.type}`">{{ TYPE_LABELS[entry.type] }}</span>
        <span class="timeline-date">{{ entry.date }}</span>
      </div>
      <h6>{{ entry.title }}</h6>
      <p>{{ entry.description }}</p>
      <a :href="entry.articleUrl" class="btn btn-primary me-2" target="_blank" rel="noopener" :aria-label="`Voir l'article : ${entry.title} (nouvelle fenêtre)`">
        Voir l'article
      </a>
    </div>
  </div>
</template>

<style scoped>
.type-badge {
  display: inline-block;
  padding: 0.15em 0.55em;
  border-radius: 4px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  flex-shrink: 0;
}

/* Couleurs vérifiées ≥ 4.5:1 contre fond blanc */
.type-maj     { background: #4361ee22; color: #2b46cc; border: 1px solid #4361ee55; }
.type-devblog { background: #f4b94222; color: #7a5500; border: 1px solid #f4b94255; }
.type-live    { background: #20c99722; color: #0d7558; border: 1px solid #20c99755; }

[data-bs-theme="dark"] .type-maj     { color: #7b97ff; }
[data-bs-theme="dark"] .type-devblog { color: #f4b942; }
[data-bs-theme="dark"] .type-live    { color: #2ecc71; }
</style>
