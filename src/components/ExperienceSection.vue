<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
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

const timelineEl = ref<HTMLElement | null>(null)
const canScrollLeft  = ref(false)
const canScrollRight = ref(true)

function updateScrollState() {
  const el = timelineEl.value
  if (!el) return
  canScrollLeft.value  = el.scrollLeft > 0
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

function scrollBy(direction: 'left' | 'right') {
  timelineEl.value?.scrollBy({ left: direction === 'right' ? 320 : -320, behavior: 'smooth' })
}

onMounted(() => {
  timelineEl.value?.addEventListener('scroll', updateScrollState, { passive: true })
  updateScrollState()
})
onUnmounted(() => {
  timelineEl.value?.removeEventListener('scroll', updateScrollState)
})
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
          :aria-pressed="activeFilter === f.value"
          @click="activeFilter = f.value; $nextTick(() => { timelineEl?.scrollTo({ left: 0 }); updateScrollState() })"
        >
          {{ f.label }}
          <span class="badge rounded-pill ms-1 filter-count">
            {{ f.value === 'all' ? timelineEntries.length : timelineEntries.filter(e => e.type === f.value).length }}
          </span>
        </button>
      </div>

      <div class="timeline-wrapper">
        <button
          class="scroll-arrow scroll-arrow-left"
          :class="{ visible: canScrollLeft }"
          aria-label="Précédent"
          @click="scrollBy('left')"
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <div ref="timelineEl" class="timeline-horizontal" role="list" aria-label="Contributions Dofus Touch">
          <TimelineItem v-for="entry in filteredEntries" :key="entry.title" :entry="entry" />
        </div>

        <button
          class="scroll-arrow scroll-arrow-right"
          :class="{ visible: canScrollRight }"
          aria-label="Suivant"
          @click="scrollBy('right')"
        >
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="fade-left"  :class="{ visible: canScrollLeft }"></div>
        <div class="fade-right" :class="{ visible: canScrollRight }"></div>
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

/* Scroll wrapper */
.timeline-wrapper {
  position: relative;
}

/* Fade edges */
.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.fade-left  { left: 0;  background: linear-gradient(to right, var(--bs-body-bg, white), transparent); }
.fade-right { right: 0; background: linear-gradient(to left,  var(--bs-body-bg, white), transparent); }

.fade-left.visible,
.fade-right.visible {
  opacity: 1;
}

/* Arrow buttons */
.scroll-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(var(--bs-primary-rgb), 0.3);
  background: var(--bs-body-bg, white);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.scroll-arrow-left  { left: -18px; }
.scroll-arrow-right { right: -18px; }

.scroll-arrow.visible {
  opacity: 1;
  pointer-events: auto;
}

.scroll-arrow:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
}

[data-bs-theme="dark"] .scroll-arrow {
  background: #2a2a2a;
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--primary);
}

[data-bs-theme="dark"] .fade-left  { background: linear-gradient(to right, #121212, transparent); }
[data-bs-theme="dark"] .fade-right { background: linear-gradient(to left,  #121212, transparent); }

@media (max-width: 768px) {
  .scroll-arrow { display: none; }
}
</style>
