<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'

useThemeStore()
</script>

<template>
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>
  <RouterView />
</template>
