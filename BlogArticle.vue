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
    <div class="blog-header d-flex justify-content-between align-items-center" @click="isOpen = !isOpen">
      <h3 class="h5 mb-0">{{ title }}</h3>
      <button class="btn btn-link p-0" :aria-label="isOpen ? 'Réduire' : 'Développer'">
        <i class="fas" :class="isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
      </button>
    </div>

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
