<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { useActiveSection } from '@/composables/useActiveSection'

const themeStore = useThemeStore()
const { activeSection } = useActiveSection()

const isDark = computed(() => themeStore.theme === 'dark')
const themeIcon = computed(() => isDark.value ? 'fa-sun' : 'fa-moon')
const themeLabel = computed(() => isDark.value ? 'Passer en mode clair' : 'Passer en mode sombre')

function isActive(sectionId: string) {
  return activeSection.value === sectionId
}
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top" :data-bs-theme="themeStore.theme">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/#header" aria-label="Accueil">
        <img src="/images/avatar.jpg" width="40" height="40" alt="Avatar Basil L'Hôte" class="rounded-circle me-2">
        <span class="d-none d-md-inline">Basil L'HÔTE</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isActive('about') }" :aria-current="isActive('about') ? 'true' : undefined" href="#about">À propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isActive('experience') }" :aria-current="isActive('experience') ? 'true' : undefined" href="#experience">Expérience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isActive('portfolio') }" :aria-current="isActive('portfolio') ? 'true' : undefined" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isActive('skills') }" :aria-current="isActive('skills') ? 'true' : undefined" href="#skills">Compétences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isActive('contact') }" :aria-current="isActive('contact') ? 'true' : undefined" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-sm btn-outline-secondary ms-2" :aria-label="themeLabel" @click="themeStore.toggle()">
              <i class="fas" :class="themeIcon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
