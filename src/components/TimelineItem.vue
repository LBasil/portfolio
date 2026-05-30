<script setup lang="ts">
import type { TimelineEntry } from '@/types'

defineProps<{ entry: TimelineEntry }>()
</script>

<template>
  <div class="timeline-item">
    <img :src="entry.image" :alt="entry.alt">
    <div class="timeline-content">
      <span class="timeline-date">{{ entry.date }}</span>
      <h6>{{ entry.title }}</h6>
      <p>{{ entry.description }}</p>
      <a :href="entry.articleUrl" class="btn btn-primary me-2" target="_blank" rel="noopener">
        Voir l'article
      </a>
    </div>
  </div>
</template>
