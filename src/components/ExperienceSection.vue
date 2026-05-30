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
      <h2 class="section-title text-center mb-3">Expérience Dofus Touch</h2>

      <p class="text-center mb-4">
        Contributions aux mises à jour, devblogs et lives.
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
</style>
