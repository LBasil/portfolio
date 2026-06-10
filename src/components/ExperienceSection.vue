<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TimelineFilter } from '@/types'
import { timelineEntries } from '@/data/timeline'
import TimelineItem from '@/components/TimelineItem.vue'

const activeFilter = ref<TimelineFilter>('all')

const filters: { label: string; value: TimelineFilter }[] = [
  { label: 'Tout', value: 'all' },
  { label: 'MAJ', value: 'maj' },
  { label: 'Devblogs', value: 'devblog' },
  { label: 'Lives', value: 'live' }
]

const filteredEntries = computed(() =>
  activeFilter.value === 'all'
    ? timelineEntries
    : timelineEntries.filter((e) => e.type === activeFilter.value)
)
</script>

<template>
  <section id="experience" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-2">Expérience Professionnelle</h2>

      <p class="text-center text-muted mb-1">
        <strong>Ankama Games</strong> · Développeur front-end · Dofus Touch
      </p>
      <p class="text-center text-muted small mb-4">
        Novembre 2023 → aujourd'hui &nbsp;·&nbsp; {{ timelineEntries.length }} contributions
      </p>

      <div class="text-center mb-4">
        <button
          v-for="f in filters"
          :key="f.value"
          class="btn btn-outline-primary filter-btn me-1"
          :class="{ active: activeFilter === f.value }"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
          <span class="badge rounded-pill ms-1 filter-count">
            {{ f.value === 'all' ? timelineEntries.length : timelineEntries.filter(e => e.type === f.value).length }}
          </span>
        </button>
      </div>

      <div class="timeline-horizontal">
        <TimelineItem v-for="entry in filteredEntries" :key="entry.title" :entry="entry" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.filter-btn.active {
  background-color: var(--bs-primary);
  color: white;
}

.filter-count {
  background: rgba(255, 255, 255, 0.3);
  color: inherit;
  font-size: 0.7em;
}

.filter-btn.active .filter-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

[data-bs-theme="dark"] .filter-count {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.85);
}

[data-bs-theme="dark"] .filter-btn.active .filter-count {
  background: rgba(0, 0, 0, 0.2);
  color: white;
}
</style>
