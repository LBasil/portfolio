<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  date: string
}>()

const isOpen = ref(false)
</script>

<template>
  <article class="mb-5 p-4 border rounded shadow-sm">
    <button
      class="blog-header d-flex justify-content-between align-items-center w-100 text-start border-0 bg-transparent p-0"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <h3 class="h5 mb-0">{{ title }}</h3>
      <i class="fas" :class="isOpen ? 'fa-chevron-up' : 'fa-chevron-down'" aria-hidden="true"></i>
    </button>

    <p class="text-muted small mt-1 mb-0">Publié le {{ date }}</p>

    <Transition name="blog-expand">
      <div v-if="isOpen" class="blog-content mt-3">
        <slot />
      </div>
    </Transition>
  </article>
</template>

<style scoped>
.blog-header {
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
}

.blog-header:focus-visible {
  outline: 2px solid var(--primary, #4361ee);
  outline-offset: 4px;
  border-radius: 4px;
}

.blog-expand-enter-active,
.blog-expand-leave-active {
  transition: opacity 0.25s ease;
}
.blog-expand-enter-from,
.blog-expand-leave-to {
  opacity: 0;
}
</style>
